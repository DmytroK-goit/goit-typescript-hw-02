type Props = {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
};
declare const ImageModal: ({ isOpen, onClose, imageUrl }: Props) => import("react").JSX.Element;
export default ImageModal;
