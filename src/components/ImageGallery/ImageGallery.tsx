import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

type Photo = {
  id: string;
  urls: {
    small: string;
    small_s3: string;
  };
  alt_description: string;
};

interface ImageCardProps {
  photos: Photo[];
  onImageClick: (url: string) => void;
}

const ImageGallery = ({ photos, onImageClick }: ImageCardProps) => {
  return (
    <ul className={s.ul}>
      {photos.length > 0 ? (
        photos.map((photo, index) => (
          <li key={`${photo.id}-${index}`}>
            <ImageCard photo={photo} onImageClick={onImageClick} />
          </li>
        ))
      ) : (
        <p>Немає результатів для показу.</p>
      )}
    </ul>
  );
};

export default ImageGallery;
