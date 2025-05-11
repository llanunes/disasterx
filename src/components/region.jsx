import zonaNorteIcon from "../assets/mapa-zona-norte-sp.png";
import zonaSulIcon from "../assets/mapa-zona-sul-sp.png";
import zonaLesteIcon from "../assets/mapa-zona-leste-sp.png";
import zonaOesteIcon from "../assets/mapa-zona-oeste-sp.png";

export function RegionSection() {
const section = {
  backgroundColor: "#ffff",
  padding: "80px 40px",
  textAlign: "center",
  display: "flex",             
  flexDirection: "column",    
  alignItems: "center",
  justifyContent: "center",
  minHeight: "80vh",
};


  const subtitle = {
    fontSize: "20px",
    color: "#111827",
    marginBottom: "8px",
    fontFamily: "'Work Sans', sans-serif",
  };

  const title = {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "8rem",
    fontFamily: "'Work Sans', sans-serif",
  };

  const regionsList = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "40px",
  };

  const regionItem = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "300px",
  };

  const iconStyle = {
    width: "100px",
    height: "100px",
    marginBottom: "16px",
  };

  const regionTitle = {
    fontWeight: "600",
    fontSize: "18px",
    color: "#1f2937",
    
    fontFamily: "'Work Sans', sans-serif",
  };

  const regionDescription = {
    fontSize: "14px",
    color: "#4b5563",
    lineHeight: "1.4",
    fontFamily: "'Work Sans', sans-serif",
  };

  const regions = [
    {
      title: "Zona Norte",
      description: "Cobertura completa nos bairros da Zona Norte: Água Fria, Anhanguera, Brasilândia, Cachoeirinha, Casa Verde, Imirim, Jaçanã, Jaraguá, Lauzane Paulista, Limão, Mandaqui, Santana, Tremembé, Tucuruvi, Vila Guilherme, Vila Maria, Vila Medeiros.",
      icon: zonaNorteIcon,
    },
    {
      title: "Zona Sul",
      description: "Todos os bairros da Zona Sul estão cobertos: Americanópolis, Campo Belo, Campo Grande, Campo Limpo, Capão Redondo, Cidade Ademar, Cidade Dutra, Cidade Jardim, Grajaú, Interlagos, Ipiranga, Jabaquara, Jardim Ângela, Jardim São Luís, Moema, Parelheiros, Pedreira, Sacomã, Santo Amaro, Socorro, Vila Andrade, Vila Mariana.",
      icon: zonaSulIcon,
    },
    {
      title: "Zona Leste",
      description: "Cobertura completa nos bairros da Zona Leste: Água Rasa, Aricanduva, Artur Alvim, Cangaíba, Carrão, Cidade Líder, Cidade Patriarca, Ermelino Matarazzo, Guaianases, Itaim Paulista, Itaquera, Jardim Helena, Jardim Iguatemi, José Bonifácio, Lajeado, Mooca, Parque do Carmo, Penha, Ponte Rasa, São Mateus, São Miguel Paulista, Tatuapé, Vila Curuçá, Vila Formosa, Vila Matilde, Vila Prudente.",
      icon: zonaLesteIcon,
    },
    {
      title: "Zona Oeste",
      description: "Atendemos 100% dos bairros da Zona Oeste: Alto de Pinheiros, Butantã, Jaguaré, Jardim Bonfiglioli, Jardim Paulista, Lapa, Morumbi, Perdizes, Pinheiros, Pompéia, Raposo Tavares, Rio Pequeno, Sumaré, Vila Leopoldina, Vila Madalena.",
      icon: zonaOesteIcon,
    },
  ];

  return (
    <section style={section}>
      <div style={subtitle}>Nosso sistema cobre todas as regiões da capital paulista</div>
      <h2 style={title}>Regiões Atendidas em São Paulo</h2>
      <div style={regionsList}>
        {regions.map((region, index) => (
          <div key={index} style={regionItem}>
            <img src={region.icon} alt={region.title} style={iconStyle} />
            <div style={regionTitle}>{region.title}</div>
            <p style={regionDescription}>{region.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
