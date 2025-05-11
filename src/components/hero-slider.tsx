"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";

const slides = [
  {
    title: "Visualize, Compartilhe e Reaja – Onde Cada Segundo Conta.",
    description:
      "Uma plataforma que registra e exibe alertas de desastres naturais em um mapa interativo — porque cada segundo conta.",
    image:
      "https://comeceodiafeliz.com.br/assets/uploads/mensagem/ajudar-e-ser-ajudado-1509.jpg",
  },
  {
    title: "Apoie quem precisa",
    description: "Doe roupas, alimentos e outros itens para quem mais precisa",
    image:
      "https://img.freepik.com/fotos-premium/maos-de-homem-e-mulher-alcancando-um-ao-outro-suporte-solidariedade-compaixao-e-caridade-resgate-dando-uma-mao-amiga-maos-de-homem-e-mulher-no-fundo-do-ceu-azul-dando-uma-mao-amiga_293990-1300.jpg",
  },
  {
    title: "Transforme Vidas",
    description:
      "Ajude a transformar vidas com sua doação e faça a diferença na comunidade",
    image:
      "https://floripacentro.com.br/wp-content/uploads/2020/03/bonecos-1.jpg",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: "relative", height: "95vh", overflow: "hidden" }}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            inset: 0,
            transition: "opacity 0.5s ease-in-out",
            opacity: index === currentSlide ? 1 : 0,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 1rem",
            color: "white",
            textAlign: "center",
            fontFamily: "'Work Sans', sans-serif",
          }}
        >
          <h1
            style={{
              marginBottom: "1rem",
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          >
            {slide.title}
          </h1>
          <p
            style={{
              maxWidth: "700px",
              marginBottom: "2rem",
              fontSize: "1.25rem",
            }}
          >
            {slide.description}
          </p>
          <Button
              style={{
    backgroundColor: "#0A2A82",
    color: "#fff",
    padding: "14px 32px",
    borderRadius: "9999px",
    fontSize: "16px",
    fontWeight: "600",
    textDecoration: "none",
    fontFamily: "'Work Sans', sans-serif",
  }}
          >
            Alertar
          </Button>
        </div>
      ))}

      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        style={{
          position: "absolute",
          top: "50%",
          left: "1rem",
          transform: "translateY(-50%)",
          padding: "0.5rem",
          background: "transparent",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        <ChevronLeft size={40} />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        style={{
          position: "absolute",
          top: "50%",
          right: "1rem",
          transform: "translateY(-50%)",
          padding: "0.5rem",
          background: "transparent",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        <ChevronRight size={40} />
      </button>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.5rem",
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor:
                index === currentSlide ? "white" : "rgba(255,255,255,0.5)",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
