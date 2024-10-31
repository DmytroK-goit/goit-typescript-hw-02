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
declare const ImageCard: ({ photo, onImageClick }: ImageCardProps) => import("react").JSX.Element;
export default ImageCard;
