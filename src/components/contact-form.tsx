"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

export default function ContactDashboard() {
  const [toast, setToast] = useState<{
    type: "success" | "error";
    title: string;
    description: string;
  } | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(500);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isNameValid = name.trim().length >= 2;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const isMessageValid = message.trim().length >= 5 && message.trim().length <= 500;

  const showToast = (type: "success" | "error", title: string, description: string) => {
    setToast({ type, title, description });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async () => {
    console.log("Validations:", {
      name,
      nameTrimmed: name.trim(),
      email,
      emailTrimmed: email.trim(),
      message,
      messageTrimmed: message.trim(),
      isNameValid,
      isEmailValid,
      isMessageValid,
    });

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      showToast("error", "Erro!", "Preencha todos os campos corretamente.");
      return;
    }

    try {
      setIsSubmitting(true);

      console.log({ name, email, message });

      showToast("success", "Mensagem enviada!", "Entraremos em contato em breve.");

      setName("");
      setEmail("");
      setMessage("");
      setCharCount(500);
    } catch (error) {
      showToast("error", "Erro!", "Houve um erro ao enviar sua mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = {
    pageWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f0f0f0",
      padding: "20px",
      boxSizing: "border-box" as const,
    },
    container: {
      backgroundColor: "#fff",
      padding: "40px 30px",
      fontFamily: "'Work Sans', sans-serif",
      maxWidth: "800px",
      width: "100%",
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      margin: 0,
    },
    field: {
      marginBottom: "28px",
    },
    label: {
      fontWeight: "600",
      fontSize: "16px",
      color: "#374151",
      display: "block",
      marginBottom: "8px",
    },
    charCounter: {
      fontSize: "13px",
      color: "#6b7280",
      marginTop: "6px",
      textAlign: "right" as const,
      fontWeight: "500",
    },
    checkIcon: {
      position: "absolute" as const,
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      color: "#22c55e",
      height: 22,
      width: 22,
      pointerEvents: "none" as const,
    },

    inputWrapper: {
      position: "relative" as const,
    },
    input: {
      boxSizing: "border-box" as const,
      width: "100%",
      padding: "12px 44px 12px 14px",
      
      borderRadius: "8px",
      fontSize: "16px",
      transition: "border-color 0.2s",
      outlineOffset: "2px",
      border: "1.5px solid #fff",
       backgroundColor: "#f3f4f6",
    },
    textarea: {
      boxSizing: "border-box" as const,
      width: "100%",
      padding: "14px",
      border: "1.5px solid #fff",
      borderRadius: "8px",
      fontSize: "16px",
      minHeight: "140px",
      resize: "vertical" as const,
      fontFamily: "'Work Sans', sans-serif",
      transition: "border-color 0.2s",
      outlineOffset: "2px",
       backgroundColor: "#f3f4f6",
    },
    inputFocus: {
      borderColor: "#22c55e",
      boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.3)",
    },

    textareaFocus: {
      borderColor: "#22c55e",
      boxShadow: "0 0 0 3px rgba(34, 197, 94, 0.3)",
    },
    toast: {
      position: "fixed" as const,
      top: "20px",
      right: "20px",
      padding: "16px 24px",
      borderRadius: "10px",
      color: "#fff",
      boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
      zIndex: 1000,
      maxWidth: "320px",
      fontWeight: "600",
      letterSpacing: "0.02em",
      transition: "opacity 0.3s ease",
    },
    button: {
      backgroundColor: "#0A2A82",
      width: "100%",
      padding: "14px",
      fontSize: "18px",
      fontWeight: "600",
      borderRadius: "10px",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#234621",
    },
    buttonDisabled: {
      backgroundColor: "#94a3b8",
      cursor: "not-allowed",
    },
    title: {
      fontSize: "36px",
      color: "#0A2A82",
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 800,
      textAlign: "center" as const,
      marginBottom: "30px",
    },
  };

  const [focusedField, setFocusedField] = useState<"name" | "email" | "message" | null>(null);

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <p style={styles.title}>Fale Conosco</p>

{toast && (
      <div
        style={{
          ...styles.toast,
          backgroundColor: toast.type === "success" ? "#22c55e" : "#ef4444",
        }}
      >
        <strong>{toast.title}</strong>
        <div style={{ marginTop: "6px" }}>{toast.description}</div>
      </div>
    )}


        <div style={styles.field}>
          <label style={styles.label} htmlFor="name">
            Nome Completo
          </label>
          <div style={styles.inputWrapper}>
            <input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                ...styles.input,
                ...(focusedField === "name" ? styles.inputFocus : {}),
              }}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
            />
            {isNameValid && <Check style={styles.checkIcon} />}
          </div>
        </div>

        <div style={styles.field}>
          <label style={styles.label} htmlFor="email">
            Email
          </label>
          <div style={styles.inputWrapper}>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                ...styles.input,
                ...(focusedField === "email" ? styles.inputFocus : {}),
              }}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
            />
            {isEmailValid && <Check style={styles.checkIcon} />}
          </div>
        </div>

        <div style={styles.field}>
          <label style={styles.label} htmlFor="message">
            Mensagem
          </label>
          <textarea
            id="message"
            placeholder="Digite sua mensagem"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setCharCount(500 - e.target.value.length);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
            style={{
              ...styles.textarea,
              ...(focusedField === "message" ? styles.textareaFocus : {}),
            }}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            maxLength={500}
          />

          <div style={styles.charCounter}>Caracteres restantes: {charCount}</div>
        </div>

        <button
          style={{
            ...styles.button,
            ...(isSubmitting ? styles.buttonDisabled : {}),
          }}
          onClick={handleSubmit}
          disabled={isSubmitting}
          type="button"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </div>
    </div>
  );
}
