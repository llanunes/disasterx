import React from "react";

const styles = {
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
};

const AlertCardNumber = ({ title, subtitle, number }) => (
  <div style={styles.card}>
    <div style={styles.cardTitleContainer}>
      <div style={styles.cardTitle}>{title}</div>
      <div style={styles.cardNumber}>{number}</div>
    </div>
    <div style={styles.cardSubtitle}>{subtitle}</div>
  </div>
);

export default AlertCardNumber;
