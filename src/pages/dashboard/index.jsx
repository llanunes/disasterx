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
    Santana: [-23.5338, -46.62],
    "Campo Limpo": [-23.684, -46.739],
    "Vila Progredior": [-23.566, -46.7435],
    Itaquera: [-23.5336, -46.4666],
    Mooca: [-23.5525, -46.6102],
    Tatuapé: [-23.5475, -46.5724],
    Lapa: [-23.5379, -46.7327],
    Pinheiros: [-23.5587, -46.6945],
    Butantã: [-23.5889, -46.7293],
    Sé: [-23.5505, -46.6333],
    "Vila Mariana": [-23.5896, -46.641],
    Ipiranga: [-23.5934, -46.6057],
    Jabaquara: [-23.6822, -46.6442],
    Tremembé: [-23.481, -46.6486],
    "Freguesia do Ó": [-23.5228, -46.7119],
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
