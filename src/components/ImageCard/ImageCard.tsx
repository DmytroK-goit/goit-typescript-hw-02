import { ImageCardProp } from "../../App.typer";
import s from "./ImageCard.module.css";

const ImageCard = ({ photo, onImageClick }: ImageCardProp) => {
  return (
    <div className={s.img}>
      <img
        src={photo.urls.small_s3}
        alt={photo.alt_description || "Image"}
        width={300}
        height={300}
        onClick={() => onImageClick(photo.urls.small)}
      />
    </div>
  );
};

export default ImageCard;
