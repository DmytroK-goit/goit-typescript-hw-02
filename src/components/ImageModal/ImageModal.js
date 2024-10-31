"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_modal_1 = __importDefault(require("react-modal"));
react_modal_1.default.setAppElement("#root");
const ImageModal = ({ isOpen, onClose, imageUrl }) => {
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
    return (<react_modal_1.default isOpen={isOpen} onRequestClose={onClose} style={customStyles} contentLabel="Модальне вікно з зображенням">
      <button onClick={onClose}>Закрити</button>
      {imageUrl && (<img src={imageUrl} alt="Велике зображення" style={{ width: "100%" }}/>)}
    </react_modal_1.default>);
};
exports.default = ImageModal;
