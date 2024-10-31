export type Photo = {
  id: string;
  urls: {
    small: string;
    small_s3: string;
  };
  alt_description: string;
};

export interface ImageCardProps {
  photos: Photo[];
  onImageClick: (url: string) => void;
}

export interface ImageCardProp {
  photo: Photo;
  onImageClick: (url: string) => void;
}
export type PropsModal = {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
};
export type PropsSubmit = {
  onSubmit: (value: string) => void;
};
