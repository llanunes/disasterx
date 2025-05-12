import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function AlertDashboard() {
  const [alerts, setAlerts] = useState([
    {
      event: "Enchente",
      start: 1682467800,
      zone: "Zona Norte",
      neighborhood: "Santana",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      severity: "Alto",
      coordinates: [-23.5338, -46.6200], 
    },
    {
      event: "Incêndio",
      start: 1682467800,
      zone: "Zona Sul",
      neighborhood: "Campo Limpo",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      severity: "Médio",
      coordinates: [-23.6840, -46.7390], 
    },
    {
      event: "Deslizamento",
      start: 1682467800,
      zone: "Zona Oeste",
      neighborhood: "Vila Progredior",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      severity: "Baixo",
      coordinates: [-23.5660, -46.7435], 
    },
    {
      event: "Enchente",
      start: 1682467800,
      zone: "Zona Leste",
      neighborhood: "Itaquera",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      severity: "Alto",
      coordinates: [-23.5336, -46.4666], 
    },
  ]);

  const styles = {
    container: {
      backgroundColor: "#ffffff",
      padding: "40px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      display: "flex",
      gap: "20px",
      marginBottom: "40px",
      flexWrap: "wrap",
    },
    card: {
      backgroundColor: "#f9fafb",
      borderRadius: "12px",
      padding: "20px",
      flex: "1",
      minWidth: "220px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column", 
      justifyContent: "space-between", 
      textAlign: "center",
    },
    cardTitleContainer: {
      display: "flex",
      justifyContent: "space-between", 
      alignItems: "center", 
    },
    cardTitle: {
      fontSize: "14px",
      fontWeight: "bold",
      color: "#374151",
      textAlign: "left", 
    },
    cardSubtitle: {
      fontSize: "12px",
      color: "#6b7280",
      textAlign: "left", 
      marginTop: "4px", 
    },
    cardNumber: {
      fontSize: "18px",
      color: "#1f2937",
      border: "1px solid #000",
      borderRadius: "10px",
      padding: "4px 8px",
      textAlign: "right", 
    },

    tableWrapper: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      overflowX: "auto",
      marginBottom: "40px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    thtd: {
      padding: "12px 16px",
      borderBottom: "1px solid #e5e7eb",
      fontSize: "14px",
      textAlign: "left",
    },
    mapContainer: {
      height: "500px",
      width: "100%",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.card}>
          <div style={styles.cardTitleContainer}>
            <div style={styles.cardTitle}>Alertas</div>
            <div style={styles.cardNumber}>349</div>
          </div>
          <div style={styles.cardSubtitle}>Alertas dos últimos 48 dias</div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardTitleContainer}>
            <div style={styles.cardTitle}>Alertas</div>
            <div style={styles.cardNumber}>349</div>
          </div>
          <div style={styles.cardSubtitle}>Alertas dos últimos 48 dias</div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardTitleContainer}>
            <div style={styles.cardTitle}>Alertas</div>
            <div style={styles.cardNumber}>349</div>
          </div>
          <div style={styles.cardSubtitle}>Alertas dos últimos 48 dias</div>
        </div>
        <div style={styles.card}>
          <div style={styles.cardTitleContainer}>
            <div style={styles.cardTitle}>Alertas</div>
            <div style={styles.cardNumber}>349</div>
          </div>
          <div style={styles.cardSubtitle}>Alertas dos últimos 48 dias</div>
        </div>
        
      </div>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.thtd}>Categoria</th>
              <th style={styles.thtd}>Localização</th>
              <th style={styles.thtd}>Data e Hora</th>
              <th style={styles.thtd}>Mensagem</th>
              <th style={styles.thtd}>Nível de Severidade</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert, index) => (
              <tr key={index}>
                <td style={styles.thtd}>{alert.event}</td>
                <td style={styles.thtd}>
                  {alert.zone}, {alert.neighborhood}
                </td>
                <td style={styles.thtd}>
                  {new Date(alert.start * 1000).toLocaleString()}
                </td>
                <td style={styles.thtd}>
                  {alert.description?.slice(0, 50)}...
                </td>
                <td style={styles.thtd}>{alert.severity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={styles.mapContainer}>
        <MapContainer
          center={[-23.5505, -46.6333]}
          zoom={10}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {alerts.map((alert, index) => (
            <Marker key={index} position={alert.coordinates}>
              <Popup>
                <strong>{alert.event}</strong>
                <br />
                {alert.description?.slice(0, 100)}...
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
