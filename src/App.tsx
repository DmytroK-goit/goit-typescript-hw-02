import { useState, useEffect } from "react";
import getPhotos from "./components/apiService/foto";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageModal from "./components/ImageModal/ImageModal";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [photos, setPhotos] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [totalPage, setTotalPage] = useState<number>(0);

  const onSubmit = (value: string) => {
    if (!value) {
      toast.info("Пошуковий запит не введений");
      setPhotos([]);
      setCount(1);
      setTotalPage(0);
      setError(null);
      return;
    }
    if (value !== searchValue) {
      setSearchValue(value);
      setPhotos([]);
      setCount(1);
      setTotalPage(0);
      setError(null);
    }
  };

  useEffect(() => {
    if (!searchValue) return;

    const getData = async () => {
      try {
        setLoading(true);
        const data = await getPhotos(searchValue, count);
        setTotalPage(data.total_pages);
        toast.success(`Успішно виконано! Знайдено ${data.results.length}`);
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
      } catch (error) {
        setError((error as Error).message);
        toast.error(`Сталася помилка: ${(error as Error).message}`);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [searchValue, count]);

  const openModal = (imageUrl: string): void => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery photos={photos} onImageClick={openModal} />
      {loading && <LoadingSpinner />}

      {error && <p style={{ color: "red" }}>Сталася помилка: {error}</p>}
      {count < totalPage && <LoadMoreBtn setCount={setCount} />}

      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </>
  );
}

export default App;
