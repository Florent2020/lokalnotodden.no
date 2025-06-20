import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const InfoModal = ({ isOpen, onRequestClose, content }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={{
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "1rem",
        padding: "2rem",
        maxWidth: "600px",
      },
    }}
  >
    <button onClick={onRequestClose} style={{ float: "right" }}>
      ✖
    </button>
    <div>{content}</div>
  </Modal>
);

export default InfoModal;
