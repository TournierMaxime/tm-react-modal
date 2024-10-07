import React from "react";
import "./Modal.css";

const Modal = ({ show, onClose, title, message, severity }) => {
  if (!show) {
    return null;
  }

  // Détermine la couleur de la modale en fonction de la sévérité
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "error":
        return { backgroundColor: "rgba(255, 231, 230, 0.7)", color: "#ff5757" }; // Rouge pour les erreurs
      case "warning":
        return { backgroundColor: "rgba(255, 242, 226, 0.7)", color: "#cc8925" }; // Jaune pour les avertissements
      case "success":
        return { backgroundColor: "rgba(228, 248, 240, 0.7)", color: "#1ea97c" }; // Vert pour les succès
      default:
        return { background: "rgba(219, 234, 254, 0.7)", color: "#3b82f6" }; // Bleu pour les infos
    }
  };

  const headerStyle = getSeverityColor(severity);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header" style={headerStyle}>
          <h3>{title}</h3>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{message}</div>
      </div>
    </div>
  );
};

export default Modal;
