import React from "react";
type LoadMoreBtnProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>;
};
declare const LoadMoreBtn: ({ setCount }: LoadMoreBtnProps) => React.JSX.Element;
export default LoadMoreBtn;
