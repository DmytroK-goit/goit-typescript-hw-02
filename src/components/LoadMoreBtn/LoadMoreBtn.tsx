import React from "react";

type LoadMoreBtnProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const LoadMoreBtn = ({ setCount }: LoadMoreBtnProps) => {
  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Завантажити ще
      </button>
    </div>
  );
};

export default LoadMoreBtn;
