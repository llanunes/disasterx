

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
    th: {
      padding: "12px 16px",
      borderBottom: "1px solid #e5e7eb",
      fontSize: "14px",
      textAlign: "left",
      color: "#0A2A82",
      fontWeight: "600",
    },
    td: {
      padding: "12px 16px",
      borderBottom: "1px solid #e5e7eb",
      fontSize: "14px",
      textAlign: "left",
      color: "#000",
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
            <th style={styles.th}>Categoria</th>
            <th style={styles.th}>Localização</th>
            <th style={styles.th}>Data e Hora</th>
            <th style={styles.th}>Mensagem</th>
            <th style={styles.th}>Nível de Severidade</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert, index) => (
            <tr key={index}>
              <td style={styles.td}>{alert.event}</td>
              <td style={styles.td}>{alert.neighborhood}</td>
              <td style={styles.td}>{new Date(alert.start * 1000).toLocaleString()}</td>
              <td style={styles.td}>
                {alert.description?.length > 80
                  ? alert.description.slice(0, 100) + "..."
                  : alert.description}
              </td>

              <td style={styles.td}>{alert.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlertTable;
