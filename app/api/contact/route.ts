import { NextResponse } from "next/server";

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

function isContactRequest(value: unknown): value is ContactRequest {
  if (!value || typeof value !== "object") return false;

  const body = value as Record<string, unknown>;
  return (
    typeof body.name === "string" &&
    typeof body.email === "string" &&
    typeof body.message === "string"
  );
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 6000) {
    return NextResponse.json({ error: "Le message est trop volumineux." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (!isContactRequest(body)) {
    return NextResponse.json({ error: "Informations de contact invalides." }, { status: 400 });
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const message = body.message.trim();

  if (
    !name ||
    name.length > 120 ||
    /[\r\n\u0000-\u001F\u007F]/.test(name) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return NextResponse.json({ error: "Veuillez vérifier les champs du formulaire." }, { status: 400 });
  }

  const token = process.env.MAILTRAP_API_TOKEN;
  const senderEmail = process.env.MAILTRAP_FROM_EMAIL;
  const recipientEmail = process.env.CONTACT_EMAIL;

  if (!token || !senderEmail || !recipientEmail) {
    console.error("Contact email is not configured: missing Mailtrap environment variables.");
    return NextResponse.json(
      { error: "Le service de contact n'est pas encore configuré." },
      { status: 503 }
    );
  }

  try {
    const response = await fetch("https://send.api.mailtrap.io/api/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: { email: senderEmail, name: "Portfolio Mostafa Lahfa" },
        to: [{ email: recipientEmail }],
        reply_to: { email, name },
        subject: "Nouvelle demande de consultation — Portfolio",
        text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
      }),
    });

    const result: unknown = await response.json();
    const sent =
      typeof result === "object" &&
      result !== null &&
      "success" in result &&
      result.success === true;

    if (!response.ok || !sent) {
      const providerErrors =
        typeof result === "object" &&
        result !== null &&
        "errors" in result &&
        Array.isArray(result.errors)
          ? result.errors.filter((error): error is string => typeof error === "string")
          : [];
      console.error(
        `Mailtrap email delivery failed with status ${response.status}.`,
        providerErrors
      );
      return NextResponse.json(
        { error: "L'envoi du message a échoué. Veuillez réessayer plus tard." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mailtrap email delivery request failed.", error);
    return NextResponse.json(
      { error: "Impossible de joindre le service d'envoi. Veuillez réessayer." },
      { status: 502 }
    );
  }
}
