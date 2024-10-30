"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ImageCard_1 = __importDefault(require("../ImageCard/ImageCard"));
const ImageGallery_module_css_1 = __importDefault(require("./ImageGallery.module.css"));
const ImageGallery = ({ photos, onImageClick }) => {
    return (<ul className={ImageGallery_module_css_1.default.ul}>
      {photos.length > 0 ? (photos.map((photo, index) => (<li key={`${photo.id}-${index}`}>
            <ImageCard_1.default photo={photo} onImageClick={onImageClick}/>
          </li>))) : (<p>Немає результатів для показу.</p>)}
    </ul>);
};
exports.default = ImageGallery;
