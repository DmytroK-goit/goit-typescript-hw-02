import { FormEvent, useState } from "react";
import { GrFormSearch } from "react-icons/gr";
import s from "./SearchBar.module.css";

type Props = {
  onSubmit: (value: string) => void;
};

const SearchBar = ({ onSubmit }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.form_block}>
        <button className={s.btn} type="submit">
          <GrFormSearch />
        </button>
        <input
          className={s.input}
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Введіть пошуковий запит"
        />
      </div>
    </form>
  );
};

export default SearchBar;
