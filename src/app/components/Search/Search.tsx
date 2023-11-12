import { ISearchProp } from "@/app/interfaces";
import { TextField } from "@mui/material";
import { FormEvent } from "react";

import styled from "styled-components";

const SearchForm = styled.form`
  background: #ffffff;
`;

export const Search = ({ handleSearch, handleSubmit, search }: ISearchProp) => {
  return (
    <SearchForm
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <TextField
        id="filled-basic"
        label="Search"
        variant="filled"
        sx={{ width: "100%" }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleSearch(event.target.value);
        }}
        value={search}
      />
    </SearchForm>
  );
};
