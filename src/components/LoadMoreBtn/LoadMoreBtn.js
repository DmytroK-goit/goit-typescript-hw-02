"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const LoadMoreBtn = ({ setCount }) => {
    return (<div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Завантажити ще
      </button>
    </div>);
};
exports.default = LoadMoreBtn;
