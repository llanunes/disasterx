import member1 from "../assets/renan.jpg";
import member2 from "../assets/victor.jpg";
import member3 from "../assets/larissa.jpg";
import member4 from "../assets/naiara.png";
import member5 from "../assets/leonardo.png";

export function TeamPhoto() {
  const section = {
    backgroundColor: "#fff",
    padding: "80px 40px",
    textAlign: "center",
  };

  const title = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "40px",
    fontFamily: "'Work Sans', sans-serif",
  };

  const stripContainer = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  };

  const photoItem = {
    flex: "1 1 160px",
    maxWidth: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
  };

  const photoBox = {
    width: "160px",
    height: "160px",
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "12px",
  };

  const photo = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const nameText = {
    fontWeight: "600",
    fontSize: "16px",
    color: "#111827",
    fontFamily: "'Work Sans', sans-serif",
    marginBottom: "4px",
  };

  const roleText = {
    fontSize: "14px",
    color: "#4B5563",
    fontFamily: "'Work Sans', sans-serif",
  };

  const team = [
    { name: "Renan", role: "Backend", photo: member1 },
    { name: "Victor", role: "Backend", photo: member2 },
    { name: "Larissa", role: "Frontend", photo: member3 },
    { name: "Naiara", role: "Backend", photo: member4 },
    { name: "Leonardo", role: "Backend", photo: member5 },
  ];

  return (
    <section style={section}>
      <h2 style={title}>Nosso Time</h2>
      <div style={stripContainer}>
        {team.map((member, index) => (
          <div key={index} style={photoItem}>
            <div style={photoBox}>
              <img src={member.photo} alt={member.name} style={photo} />
            </div>
            <div style={nameText}>{member.name}</div>
            <div style={roleText}>{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
