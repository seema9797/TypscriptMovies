import React from 'react'
import {Form,InputBoxStyle,InputIcon} from '../Styles/InputSearch.styled'
const SearchMovie = () => {
    return (
      <Form>
        <InputBoxStyle
         
          type="text"
          placeholder="search"
        ></InputBoxStyle>
        <InputIcon className="fa-solid fa-magnifying-glass"></InputIcon>
      </Form>
    );
}

export default SearchMovie