import React, { useState, useEffect } from 'react';
import { AlertSeverityeEnum } from '../enums/AlertSeverityEnum';
import { AlertCategoryEnum } from '../enums/AlertCategoryEnum';
import { Send } from 'lucide-react';

const AlertModal = ({
  categoria,
  severidade,
  bairro,
  descricao,
  setCategoria,
  setSeveridade,
  setBairro,
  setDescricao,
  handleSubmit,
  bairrosSP,
  closeModal,
}) => {
  const [errors, setErrors] = useState({
    categoria: false,
    severidade: false,
    bairro: false,
  });

  const styles = {
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 10000,
    },
    modalContent: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      width: "40%",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      position: "relative",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "none",
      border: "none",
      fontSize: "20px",
      color: "#aaa",
      cursor: "pointer",
    },
    selectsContainer: {
      display: "flex",
      gap: "15px",
      width: "100%",
    },
    select: (hasError) => ({
      padding: "10px",
      borderRadius: "6px",
      border: hasError ? "2px solid red" : "1px solid #ccc",
      fontSize: "14px",
      backgroundColor: "#fff",
      color: "#000",
      width: "100%",
    }),
    errorText: {
      color: "red",
      fontSize: "12px",
      marginTop: "4px",
    },
    textarea: {
      width: "100%",
      backgroundColor: "#fff",
      height: "250px",
      resize: "vertical",
      marginTop: "20px",
      paddingTop: "10px",
      fontSize: "14px",
      color: "#000",
      borderRadius: "6px",
      border: "1px solid #ccc",
    },
    submitBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      margin: "10px",
      padding: "10px",
      backgroundColor: "#0A2A82",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    },
  };

  const validateAndSubmit = () => {
    const newErrors = {
      categoria: !categoria,
      severidade: !severidade,
      bairro: !bairro,
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (!hasErrors) {
      handleSubmit();
    }
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button style={styles.closeButton} onClick={closeModal}>X</button>
        <h2 style={{color: "#0A2A82"}}>Novo Alerta</h2>

        <div style={styles.selectsContainer}>
          <div style={{ width: "33%" }}>
            <select
              style={styles.select(errors.categoria)}
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value);
                setErrors((prev) => ({ ...prev, categoria: false }));
              }}
            >
              <option value="">Categoria</option>
              <option value={AlertCategoryEnum.ENCHENTE}>Enchente</option>
              <option value={AlertCategoryEnum.INICIO}>Incêndio</option>
              <option value={AlertCategoryEnum.DESLIZAMENTO}>Deslizamento</option>
              <option value={AlertCategoryEnum.OUTROS}>Outros</option>
            </select>
            {errors.categoria && <div style={styles.errorText}>Selecione uma categoria.</div>}
          </div>

          <div style={{ width: "33%" }}>
            <select
              style={styles.select(errors.severidade)}
              value={severidade}
              onChange={(e) => {
                setSeveridade(e.target.value);
                setErrors((prev) => ({ ...prev, severidade: false }));
              }}
            >
              <option value="">Nível de Severidade</option>
              <option value={AlertSeverityeEnum.BAIXO}>Baixo</option>
              <option value={AlertSeverityeEnum.MEDIO}>Médio</option>
              <option value={AlertSeverityeEnum.ALTO}>Alto</option>
            </select>
            {errors.severidade && <div style={styles.errorText}>Selecione a severidade.</div>}
          </div>

          <div style={{ width: "33%" }}>
            <select
              style={styles.select(errors.bairro)}
              value={bairro}
              onChange={(e) => {
                setBairro(e.target.value);
                setErrors((prev) => ({ ...prev, bairro: false }));
              }}
            >
              <option value="">Localização (Bairro)</option>
              {Object.keys(bairrosSP).map((b, i) => (
                <option key={i} value={b}>{b}</option>
              ))}
            </select>
            {errors.bairro && <div style={styles.errorText}>Selecione um bairro.</div>}
          </div>
        </div>

        <textarea
          style={styles.textarea}
          placeholder="Descrição do alerta..."
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <button style={styles.submitBtn} onClick={validateAndSubmit}>
          <Send/>
          <p>Enviar</p></button>
      </div>
    </div>
  );
};

export default AlertModal;
