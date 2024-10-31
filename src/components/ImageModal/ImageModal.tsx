import Modal from "react-modal";
import { PropsModal } from "../../App.typer";

const ImageModal = ({ isOpen, onClose, imageUrl }: PropsModal) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#333",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Модальне вікно з зображенням"
    >
      <button onClick={onClose}>Закрити</button>
      {imageUrl && (
        <img src={imageUrl} alt="Велике зображення" style={{ width: "100%" }} />
      )}
    </Modal>
  );
};

export default ImageModal;
