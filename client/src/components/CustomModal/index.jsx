import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styles from "./style.module.css";
Modal.setAppElement('#root');

const CustomModal = ({ isOpen, onClose, message }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Notification"
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <button className={styles.modalCloseButton} onClick={onClose}>×</button>
      <h2>{message.title}</h2>
      <p>{message.body}</p>
      {message.footer}
    </Modal>
  );
};

export default CustomModal;