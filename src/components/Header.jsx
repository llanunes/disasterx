import { Link } from "react-router-dom";

export function Header() {
  const menu = {
    background: "#FCFCFD",
    height: "5vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
  };
  const link = {
    display: "inlineBlock",
    textDecoration: "none",
    padding: "20px",
    color: "#777E90",
    fontSize: "18px",
  };
  const logo = {
    height: "70%",
    display: "flex",
    alignItems: "center",
  };

  return (
    <nav style={menu}>
      <div style={logo}>
        <img src="src/assets/logo.svg" alt="Logo" style={{ height: "80%" }} />
      </div>
      <ul style={{ display: "flex", listStyle: "none", margin: 0 }}>
        <li>
          <Link style={link} to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link style={link} to="/contact">
            CONTATO
          </Link>
        </li>
        <li>
          <Link style={link} to="/contact">
            MAPA
          </Link>
        </li>
        <li>
          <Link style={link} to="/contact">
            ALERTAR
          </Link>
        </li>
      </ul>
    </nav>
  );
}
