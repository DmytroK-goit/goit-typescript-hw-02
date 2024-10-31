"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ImageCard_module_css_1 = __importDefault(require("./ImageCard.module.css"));
const ImageCard = ({ photo, onImageClick }) => {
    return (<div className={ImageCard_module_css_1.default.img}>
      <img src={photo.urls.small_s3} alt={photo.alt_description || "Image"} width={300} height={300} onClick={() => onImageClick(photo.urls.small)}/>
    </div>);
};
exports.default = ImageCard;
