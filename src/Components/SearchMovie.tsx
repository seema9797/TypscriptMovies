import { FormEvent, ChangeEvent } from "react";
import { Form, InputBoxStyle, InputIcon } from "../Styles/InputSearch.styled";

type Props = {
  changeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  SearchVal?: (values: string[]) => void;
};
const SearchMovie: React.FC<Props> = ({ changeHandler, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <InputBoxStyle
        onChange={changeHandler}
        type="text"
        placeholder="search"
      ></InputBoxStyle>
      <InputIcon className="fa-solid fa-magnifying-glass"></InputIcon>
    </Form>
  );
};

export default SearchMovie;
