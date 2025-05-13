import { useState } from "react";

const AlertTable = ({ alerts }) => {
  const styles = {
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
    pagination: {
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
    },
    pageButton: {
      padding: "8px 12px",
      margin: "0 5px",
      cursor: "pointer",
      borderRadius: "5px",
      border: "1px solid #ddd",
      backgroundColor: "#f9f9f9",
      fontSize: "14px",
    },
    activePage: {
      backgroundColor: "#007BFF",
      color: "#fff",
    },
  };

  
  return (
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
                {alert.neighborhood}
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
  );
};

export default AlertTable;
