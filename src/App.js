"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const foto_1 = __importDefault(require("./components/apiService/foto"));
const SearchBar_1 = __importDefault(require("./components/SearchBar/SearchBar"));
const ImageGallery_1 = __importDefault(require("./components/ImageGallery/ImageGallery"));
const LoadingSpinner_1 = __importDefault(require("./components/LoadingSpinner/LoadingSpinner"));
const LoadMoreBtn_1 = __importDefault(require("./components/LoadMoreBtn/LoadMoreBtn"));
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
const ImageModal_1 = __importDefault(require("./components/ImageModal/ImageModal"));
require("./App.css");
function App() {
    const [searchValue, setSearchValue] = (0, react_1.useState)("");
    const [photos, setPhotos] = (0, react_1.useState)([]);
    const [error, setError] = (0, react_1.useState)(null);
    const [count, setCount] = (0, react_1.useState)(0);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [modalIsOpen, setModalIsOpen] = (0, react_1.useState)(false);
    const [selectedImage, setSelectedImage] = (0, react_1.useState)("");
    const [totalPage, setTotalPage] = (0, react_1.useState)(0);
    const onSubmit = (value) => {
        if (!value) {
            react_toastify_1.toast.info("Пошуковий запит не введений");
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
    (0, react_1.useEffect)(() => {
        if (!searchValue)
            return;
        const getData = async () => {
            try {
                setLoading(true);
                const data = await (0, foto_1.default)(searchValue, count);
                setTotalPage(data.total_pages);
                react_toastify_1.toast.success(`Успішно виконано! Знайдено ${data.results.length}`);
                setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
            }
            catch (error) {
                setError(error.message);
                react_toastify_1.toast.error(`Сталася помилка: ${error.message}`);
            }
            finally {
                setLoading(false);
            }
        };
        getData();
    }, [searchValue, count]);
    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage("");
    };
    return (<>
      <SearchBar_1.default onSubmit={onSubmit}/>
      <ImageGallery_1.default photos={photos} onImageClick={openModal}/>
      {loading && <LoadingSpinner_1.default />}

      {count < totalPage && <LoadMoreBtn_1.default setCount={setCount}/>}

      <ImageModal_1.default isOpen={modalIsOpen} onClose={closeModal} imageUrl={selectedImage}/>
      <react_toastify_1.ToastContainer position="top-right" autoClose={5000} hideProgressBar={false}/>
    </>);
}
exports.default = App;
