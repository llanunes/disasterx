import { useState } from "react";
import AlertCardNumber from "../../components/AlertCardNumber";
import AlertCardCategory from "../../components/AlertCardCategory";
import AlertMap from "../../components/AlertMap";
import AlertTable from "../../components/AlertTable";
import AlertModal from "../../components/AlertModal";
import "leaflet/dist/leaflet.css";
import { AlertSeverityeEnum } from "../../enums/AlertSeverityEnum";
import { AlertCircle, AlertTriangle } from "lucide-react";

export default function AlertDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [severidade, setSeveridade] = useState("");
  const [bairro, setBairro] = useState("");
  const [descricao, setDescricao] = useState("");
  const [selectedCoordinates, setSelectedCoordinates] = useState([
    -23.5505, -46.6333,
  ]);
  const closeModal = () => setIsModalOpen(false);

const bairrosSP = {
  "Santana": [-23.5167, -46.6269],
  "Campo Limpo": [-23.6494, -46.7580],
  "Vila Progredior": [-23.5884, -46.7151],
  "Itaquera": [-23.5333, -46.4500],
  "Mooca": [-23.5592, -46.6092],
  "Tatuapé": [-23.5362, -46.5668],
  "Lapa": [-23.5250, -46.6862],
  "Pinheiros": [-23.5678, -46.7011],
  "Butantã": [-23.5700, -46.7150],
  "Sé": [-23.5501, -46.6339],
  "Vila Mariana": [-23.5830, -46.6320],
  "Ipiranga": [-23.5850, -46.6100],
  "Jabaquara": [-23.6460, -46.6410],
  "Tremembé": [-23.4560, -46.6250],
  "Freguesia do Ó": [-23.5080, -46.6870],
  "Água Fria": [-23.4890, -46.6200],
  "Anhanguera": [-23.4020, -46.7650],
  "Brasilândia": [-23.4560, -46.6810],
  "Cachoeirinha": [-23.4750, -46.6550],
  "Casa Verde": [-23.5090, -46.6410],
  "Imirim": [-23.4920, -46.6410],
  "Jaçanã": [-23.4560, -46.6000],
  "Jaraguá": [-23.4130, -46.7520],
  "Lauzane Paulista": [-23.4800, -46.6400],
  "Limão": [-23.5080, -46.6580],
  "Mandaqui": [-23.4700, -46.6300],
  "Tucuruvi": [-23.4780, -46.6200],
  "Vila Guilherme": [-23.5110, -46.6100],
  "Vila Maria": [-23.5040, -46.5900],
  "Vila Medeiros": [-23.4940, -46.5800],
  "Americanópolis": [-23.6600, -46.6400],
  "Campo Belo": [-23.6210, -46.6700],
  "Campo Grande": [-23.6800, -46.6800],
  "Capão Redondo": [-23.6760, -46.7540],
  "Cidade Ademar": [-23.6700, -46.6700],
  "Cidade Dutra": [-23.7000, -46.7000],
  "Cidade Jardim": [-23.6000, -46.7000],
  "Grajaú": [-23.7500, -46.7000],
  "Interlagos": [-23.7000, -46.7000],
  "Jardim Ângela": [-23.7000, -46.7500],
  "Jardim São Luís": [-23.6800, -46.7500],
  "Moema": [-23.6000, -46.6600],
  "Parelheiros": [-23.8500, -46.7000],
  "Pedreira": [-23.7000, -46.6800],
  "Sacomã": [-23.6000, -46.6100],
  "Santo Amaro": [-23.6500, -46.7000],
  "Socorro": [-23.7000, -46.7000],
  "Vila Andrade": [-23.6200, -46.7200],
  "Água Rasa": [-23.5600, -46.5800],
  "Aricanduva": [-23.5500, -46.5300],
  "Artur Alvim": [-23.5400, -46.4800],
  "Cangaíba": [-23.5100, -46.5200],
  "Carrão": [-23.5500, -46.5700],
  "Cidade Líder": [-23.5500, -46.4600],
  "Cidade Patriarca": [-23.5400, -46.5000],
  "Ermelino Matarazzo": [-23.5000, -46.4700],
  "Guaianases": [-23.5300, -46.4100],
  "Itaim Paulista": [-23.5000, -46.4000],
  "Jardim Helena": [-23.4900, -46.4100],
  "Jardim Iguatemi": [-23.5500, -46.4200],
  "José Bonifácio": [-23.5300, -46.4200],
  "Lajeado": [-23.5300, -46.4000],
  "Parque do Carmo": [-23.5500, -46.4700],
  "Penha": [-23.5300, -46.5200],
  "Ponte Rasa": [-23.5100, -46.5200],
  "São Mateus": [-23.5700, -46.4600],
  "São Miguel Paulista": [-23.5000, -46.4500],
  "Vila Curuçá": [-23.5000, -46.4300],
  "Vila Formosa": [-23.5600, -46.5600],
  "Vila Matilde": [-23.5400, -46.5200],
  "Vila Prudente": [-23.5800, -46.5900],
  "Alto de Pinheiros": [-23.5428, -46.7085],
  "Jaguaré": [-23.5500, -46.7300],
  "Jardim Bonfiglioli": [-23.5700, -46.7400],
  "Jardim Paulista": [-23.5700, -46.6600],
  "Morumbi": [-23.6000, -46.7200],
  "Perdizes": [-23.5300, -46.6800],
  "Pompéia": [-23.5300, -46.6700],
  "Raposo Tavares": [-23.6000, -46.7500],
  "Rio Pequeno": [-23.5700, -46.7400],
  "Sumaré": [-23.5400, -46.6700],
  "Vila Leopoldina": [-23.5300, -46.7100],
  "Vila Madalena": [-23.5500, -46.6900]
};


  const handleSubmit = () => {
    const newAlert = {
      event: categoria,
      start: Date.now() / 1000,
      zone: bairro,
      neighborhood: bairro,
      description: descricao,
      severity: severidade,
      coordinates: bairrosSP[bairro] || [-23.5505, -46.6333],
    };

    setAlerts((prevAlerts) => [...prevAlerts, newAlert]);

    setSelectedCoordinates(newAlert.coordinates);

    setIsModalOpen(false);

    setCategoria("");
    setSeveridade("");
    setBairro("");
    setDescricao("");
  };

  const styles = {
    container: {
      backgroundColor: "#ffffff",
      padding: "40px",
      fontFamily: "Arial, sans-serif",
      position: "relative",
    },
    header: {
      display: "flex",
      gap: "20px",
      marginBottom: "40px",
      flexWrap: "wrap",
    },
    alertButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "20px",
      padding: "8px 20px 8px 20px",
      backgroundColor: "#0A2A82",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  const [alerts, setAlerts] = useState([
    {
      event: "Enchente",
      start: 1682467800,
      neighborhood: "Santana",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      severity: AlertSeverityeEnum.ALTO,
      coordinates: [-23.5338, -46.62],
    },
    {
      event: "Incêndio",
      start: 1682467800,
      neighborhood: "Campo Limpo",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      severity: AlertSeverityeEnum.MEDIO,
      coordinates: [-23.684, -46.739],
    },
    {
      event: "Deslizamento",
      start: 1682467800,
      neighborhood: "Vila Progredior",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      severity: AlertSeverityeEnum.BAIXO,
      coordinates: [-23.566, -46.7435],
    },
    {
      event: "Enchente",
      start: 1682467800,
      neighborhood: "Itaquera",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      severity: AlertSeverityeEnum.ALTO,
      coordinates: [-23.5336, -46.4666],
    },
  ]);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <AlertCardNumber
          title="Alertas"
          subtitle="Alertas dos últimos 28 dias"
          number={alerts.length}
        />
        <AlertCardNumber
          title="Últimos Alertas"
          subtitle="Alertas das últimas 24 horas"
          number={1}
        />

        <AlertCardCategory
        city="Itaquera"
          subtitle="Último registro"
          category="Enchente"
        />

       <AlertCardCategory
          city="Local Crítico"
          subtitle="Local com mais registros"
          category="Santana"
        />
      </div>

     <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
  <button style={styles.alertButton} onClick={() => setIsModalOpen(true)}>
    <AlertCircle />
    <p>Alertar</p>
  </button>
</div>


      {isModalOpen && (
        <AlertModal
          bairro={bairro}
          closeModal={closeModal}
          categoria={categoria}
          descricao={descricao}
          severidade={severidade}
          bairrosSP={bairrosSP}
          handleSubmit={handleSubmit}
          setBairro={setBairro}
          setCategoria={setCategoria}
          setDescricao={setDescricao}
          setSeveridade={setSeveridade}
        />
      )}
      <AlertTable alerts={alerts} />

      <AlertMap alerts={alerts} selectedCoordinates={selectedCoordinates} />
    </div>
  );
}
