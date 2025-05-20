import userIcon from "../assets/avatar.png"; 

export function TestimonialsSection() {
  const section = {
    backgroundColor: "#B8D1EA",
    padding: "80px 40px",
    textAlign: "center",
  };

  const subtitle = {
    fontSize: "20px",
    color: "#111827",
    marginBottom: "8px",
    fontFamily: "'Work Sans', sans-serif",
    fontFamily: "'Work Sans', sans-serif",
  };

  const title = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "40px",
    fontFamily: "'Work Sans', sans-serif",

  };

  const testimonialsList = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "32px",
  };

  const card = {
    backgroundColor: "#f9fafb",
    borderRadius: "20px",
    padding: "32px",
    maxWidth: "300px",
    textAlign: "left",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    display: "flex",
    flexDirection: "column",
    height: "auto", 
  };

  const text = {
    fontSize: "16px",
    color: "#4b5563",
    marginBottom: "24px",
    lineHeight: "1.6",
    fontFamily: "'Work Sans', sans-serif",
    flexGrow: 1, 

  };

  const profile = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "auto", 
  };

  const avatar = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#f3f4f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const avatarImage = {
    width: "40px",
    height: "40px",
  };

  const name = {
    fontWeight: "600",
    color: "#111827",
    fontFamily: "'Work Sans', sans-serif",
  };

  const role = {
    fontSize: "14px",
    color: "#6b7280",
    fontFamily: "'Work Sans', sans-serif",
  };

  const testimonials = [
    {
      message:
        "O sistema me avisou sobre uma ocorrência na região do Limão, bem próximo de onde meus filhos estudam. Consegui ajustar a rota e evitar o transtorno.",
      name: "Marcelo Santos",
      role: "Zona Norte",
    },
    {
      message:
        "O sistema funcionou perfeitamente no meu bairro, que é um pouco afastado. Finalmente encontrei uma solução que cobre toda a Zona Sul!",
      name: "Camila Ferreira",
      role: "Zona Sul",
    },
    {
      message:
        "Eu sempre fico apreensivo com a temporada de chuvas. O mapa que mostra os alertas de enchente na região de Interlagos foi essencial para evitar sair de casa na hora errada.",
      name: "Paulo Martins",
      role: "Zona Oeste",
    },
  ];

  return (
    <section style={section}>
      <div style={subtitle}>Testemunhos</div>
      <h2 style={title}>O que as pessoas dizem?</h2>
      <div style={testimonialsList}>
        {testimonials.map((item, index) => (
          <div key={index} style={card}>
            <p style={text}>{item.message}</p>
            <div style={profile}>
              <div style={avatar}>
                <img src={userIcon} alt="Usuário" style={avatarImage} />
              </div>
              <div>
                <div style={name}>{item.name}</div>
                <div style={role}>{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
