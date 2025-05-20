import { Link } from "react-router-dom";

export function HeroSection() {
  const container = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "80px",
    backgroundColor: "#B8D1EA",
    minHeight: "100vh",
    boxSizing: "border-box",
    fontFamily: "'Work Sans', sans-serif",
  };

  const textContainer = {
    maxWidth: "50%",
  };

  const heading = {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: "36px",
    fontWeight: "700",
    color: "#0A2A82",
    lineHeight: "1.4",
    marginBottom: "20px",
  };

  const paragraph = {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: "16px",
    color: "#6B7280",
    lineHeight: "1.6",
    marginBottom: "30px",
  };

  const linkBase = {
    backgroundColor: "#0A2A82",
    color: "#fff",
    padding: "14px 32px",
    borderRadius: "9999px",
    fontSize: "16px",
    fontWeight: "600",
    textDecoration: "none",
    fontFamily: "'Work Sans', sans-serif",
  };

  const getLinkStyle = (path) => ({
    ...linkBase,
    borderBottom:
      location.pathname === path
        ? "2px solid #0A2A82"
        : "2px solid transparent",
  });

  const image = {
    width: "40%",
    height: "30px",
    backgroundColor: "#717C99",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: "16 / 9",
  };

  return (
    <section style={container}>
      <div style={textContainer}>
        <h1 style={heading}> Sobre Disaster X</h1>
        <p style={paragraph}>
          Reúne e exibe, em tempo real, informações sobre desastres naturais com
          base em fontes confiáveis. Usuários e organizações também podem
          contribuir com alertas, ampliando a rede de conscientização e
          resposta. A missão é clara: informar com agilidade, salvar vidas e
          conectar comunidades em risco com soluções e apoio imediato.
        </p>
        <Link style={getLinkStyle("/dashboard")} to="/dashboard">
          Alertar
        </Link>
      </div>
      <div style={image}>
        <img
          src="https://www.casadaergonomia.com.br/wp-content/uploads/2019/07/young-people-using-smartphones-1024x683.jpg"
          alt="Imagem ilustrativa"
          style={{ width: "100%" }}
        />
      </div>
    </section>
  );
}
