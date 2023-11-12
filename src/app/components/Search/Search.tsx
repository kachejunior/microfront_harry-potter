import { ISearchProp } from "@/app/interfaces";
import styles from "./search.module.scss";
import { TextField } from "@mui/material";

export const Search = ({ handleSearch, search }: ISearchProp) => {
  return (
    <div className={styles.search}>
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
    </div>
  );
};
