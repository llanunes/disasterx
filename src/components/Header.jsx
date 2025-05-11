import { Link, useLocation } from "react-router-dom";

export function Header() {
const location = useLocation();

const menu = {
background: "#FCFCFD",
height: "5vh",
display: "flex",
alignItems: "center",
justifyContent: "space-between",
padding: "0 20px",
};

const linkBase = {
display: "inline-block",
textDecoration: "none",
padding: "6px",
color: "#777E90",
fontSize: "18px",
fontFamily: "'Work Sans', sans-serif",
borderBottom: "2px solid transparent",

};

const getLinkStyle = (path) => ({
...linkBase,
borderBottom: location.pathname === path ? "2px solid #0A2A82" : "2px solid transparent",

});

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
<ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, gap: "30px" }}>

<li>
<Link style={getLinkStyle("/")} to="/">
Home
</Link>
</li>
<li>
<Link style={getLinkStyle("/contact")} to="/contact">
Contato
</Link>
</li>
<li>
<Link style={getLinkStyle("/mapa")} to="/mapa">
Mapa
</Link>
</li>
<li>
<Link style={getLinkStyle("/alertar")} to="/alertar">
Alertar
</Link>
</li>
</ul>
</nav>
);
}