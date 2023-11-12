"use client";
import { getAllCharacter } from "./service/rickAndMorty.service";
import { useEffect, useState, useRef } from "react";
import { ICharacter } from "@/app/interfaces";
import { Pagination } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import { Search } from "./components/Search/Search";
import HeroCard from "./components/HeroCard/HeroCard";
import styled from "styled-components";

const MainStyle = styled.main`
  padding: 20px;
  .main__contain {
    display: flex;
    flex-wrap: wrap;
  }

  .main__pagination {
    display: flex;
    justify-content: center;
    margin: 20px 0 !important;
    button {
      color: #ffe81f !important;
      &:hover {
        background: #f0e9a8;
        color: #000000 !important;
      }
      &.Mui-selected {
        background: #f0e9a8;
        color: #000000 !important;
      }
    }
  }
`;

export default function Main() {
  const searchParams = useSearchParams();
  const pageSelect = searchParams.get("page")
    ? parseInt(searchParams.get("page") || "")
    : 1;

  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(pageSelect);
  const [search, setSearch] = useState("");

  const initialized = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      getAllCharacter({ page })
        .then((result) => {
          setCharacters(result.results);
          setPages(result.info.pages);
        })
        .catch((err) => {
          console.warn(err);
          setCharacters([]);
        });
    }
  }, [setCharacters, search, page]);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    initialized.current = false;
    setPage(value);
    router.push(`/?page=${value}`);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handleSubmit = () => {
    setPage(1);
    getAllCharacter({ page: 1, name: search })
      .then((result) => {
        setCharacters(result.results);
        setPages(result.info.pages);
      })
      .catch((err) => {
        console.warn(err);
        setCharacters([]);
      });
  };

  return (
    <MainStyle>
      <Search
        search={search}
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
      />

      <div className="main__contain">
        {characters.map((character: ICharacter) => (
          <HeroCard key={character.id} character={character} />
        ))}
      </div>

      <div className="main__pagination">
        <Pagination
          color="primary"
          count={pages}
          page={page || 1}
          onChange={handleChange}
        />
      </div>
    </MainStyle>
  );
}
