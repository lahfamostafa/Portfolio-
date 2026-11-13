"use client";

import { createElement, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1400;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.02;
    pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
  });

  return createElement(
    "points",
    { ref: pointsRef },
    createElement(
      "bufferGeometry",
      null,
      createElement("bufferAttribute", {
        attach: "attributes-position",
        count,
        array: positions,
        itemSize: 3,
      }),
    ),
    createElement("pointsMaterial", {
      size: 0.02,
      color: "#7C3AED",
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    }),
  );
}

export default function ParticlesCanvas() {
  return createElement(
    Canvas,
    {
      className: "!absolute inset-0",
      camera: { position: [0, 0, 5], fov: 60 },
      dpr: [1, 1.5],
      gl: { antialias: true, alpha: true },
    },
    createElement("ambientLight", { intensity: 0.5 }),
    createElement(ParticleField),
  );
}
