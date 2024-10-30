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
declare const ImageGallery: ({ photos, onImageClick }: ImageCardProps) => import("react").JSX.Element;
export default ImageGallery;
