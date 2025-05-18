import javascriptIcon from "../assets/js.png";
import pythonIcon from "../assets/python.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css-3.png";
import reactIcon from "../assets/react.svg";


export function TechnologiesSection() {
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
  };

  const title = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "40px",
    fontFamily: "'Work Sans', sans-serif",
  };

  const iconList = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "40px",
  };

  const iconItem = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const icon = {
    width: "90px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "8px",
    overflow: "hidden",
  };

const iconImage = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};


  const iconText = {
    fontWeight: "600",
    color: "#111827",
    fontFamily: "'Work Sans', sans-serif",
  };

  const technologies = [
    { name: "JavaScript", icon: javascriptIcon },
    { name: "Python", icon: pythonIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    {name: "React", icon: reactIcon}
  ];

  return (
    <section style={section}>
      <div style={subtitle}>Nossas Tecnologias</div>
      <h2 style={title}>Linguagens Utilizadas</h2>
      <div style={iconList}>
        {technologies.map((tech, index) => (
          <div key={index} style={iconItem}>
            <div style={icon}>
              <img src={tech.icon} alt={tech.name} style={iconImage} />
            </div>
            <span style={iconText}>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
