import { Blocks } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="blocks-wrapper">
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinner;
