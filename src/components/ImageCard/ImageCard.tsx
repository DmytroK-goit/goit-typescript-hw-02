import s from "./ImageCard.module.css";

type Photo = {
  urls: {
    small: string;
    small_s3: string;
  };
  alt_description: string;
};

interface ImageCardProps {
  photo: Photo;
  onImageClick: (url: string) => void;
}

const ImageCard = ({ photo, onImageClick }: ImageCardProps) => {
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
