"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import MagneticButton from "@/components/ui/MagneticButton";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [isSending, setIsSending] = useState(false);

  function validate(state: FormState) {
    const next: Partial<FormState> = {};
    if (!state.name.trim()) next.name = "Le nom est requis.";
    if (!state.email.trim()) next.email = "L'email est requis.";
    else if (!/^\S+@\S+\.\S+$/.test(state.email)) next.email = "Email invalide.";
    if (!state.message.trim() || state.message.trim().length < 10)
      next.message = "Message trop court (10 caractères min).";
    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate(form);
    setErrors(next);
    setSubmitted(false);
    setSubmissionError("");
    if (Object.keys(next).length > 0) return;

    setIsSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result: { error?: string } = await response.json();

      if (!response.ok) {
        setSubmissionError(result.error ?? "L'envoi du message a échoué.");
        return;
      }

      setSubmitted(true);
      setForm(initialState);
    } catch {
      setSubmissionError("Impossible d'envoyer le message. Vérifiez votre connexion et réessayez.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="section-pad relative mx-auto max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-mono text-sm tracking-widest text-[#06B6D4]">Contact</p>
        <h2 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl">
          Travaillons ensemble
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 lg:col-span-2"
        >
          {[
            { icon: Mail, label: "Email", value: "lahfa.mostafa1@gmail.com" },
            { icon: Phone, label: "Téléphone", value: "Sur demande" },
            { icon: MapPin, label: "Localisation", value: "Maroc — Remote" },
          ].map((info) => (
            <TiltCard key={info.label} intensity={4} className="flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                <info.icon size={18} className="text-[#06B6D4]" />
              </div>
              <div>
                <p className="text-xs text-[#94A3B8]">{info.label}</p>
                <p className="text-sm text-white">{info.value}</p>
              </div>
            </TiltCard>
          ))}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="glass gradient-border space-y-5 rounded-2xl p-8 lg:col-span-3"
          noValidate
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs text-[#94A3B8]">
              Nom
            </label>
            <input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={120}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#2563EB]"
              placeholder="Votre nom"
            />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs text-[#94A3B8]">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={254}
              required
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#2563EB]"
              placeholder="vous@exemple.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs text-[#94A3B8]">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={5000}
              required
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#2563EB]"
              placeholder="Décrivez votre projet..."
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

          <MagneticButton
            type="submit"
            disabled={isSending}
            cursorText="Envoyer"
            className="w-full justify-center"
          >
            <span className="flex items-center gap-2">
              <Send size={16} /> {isSending ? "Envoi en cours..." : "Envoyer le message"}
            </span>
          </MagneticButton>

          {submissionError && (
            <p className="text-sm text-red-400" role="alert">
              {submissionError}
            </p>
          )}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-[#06B6D4]"
              role="status"
            >
              <CheckCircle2 size={16} /> Votre message a bien été envoyé.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
