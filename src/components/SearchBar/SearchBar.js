"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const gr_1 = require("react-icons/gr");
const SearchBar_module_css_1 = __importDefault(require("./SearchBar.module.css"));
const SearchBar = ({ onSubmit }) => {
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputValue);
    };
    return (<form className={SearchBar_module_css_1.default.form} onSubmit={handleSubmit}>
      <div className={SearchBar_module_css_1.default.form_block}>
        <button className={SearchBar_module_css_1.default.btn} type="submit">
          <gr_1.GrFormSearch />
        </button>
        <input className={SearchBar_module_css_1.default.input} type="text" value={inputValue} onChange={handleChange} placeholder="Введіть пошуковий запит"/>
      </div>
    </form>);
};
exports.default = SearchBar;
