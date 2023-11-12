"use client";

import { Sheet } from "@mui/joy";
import { getAllCharacter } from "./service/rickAndMorty.service";
import { useEffect, useState, useRef } from "react";
import { ICharacter } from "@/app/interfaces";
import { Pagination } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./page.module.scss";
import { Search } from "./components/Search/Search";
import HeroCard from "./components/HeroCard/HeroCard";

export default function People() {
  const searchParams = useSearchParams();
  const pageSelect = searchParams.get("page")
    ? parseInt(searchParams.get("page") || "")
    : 1;

  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(pageSelect);
  const [search, setSearch] = useState("");

  const initialized = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      getAllCharacter({ page, search }).then((result) => {
        setCharacters(result.results);
        setPages(result.info.pages);
        setLoading(false);
      });
    }
  }, [setCharacters, page, search]);

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    initialized.current = false;
    setLoading(true);
    setPage(value);
    router.push(`/?page=${value}`);
  };

  const handleSearch = (value: string) => {
    initialized.current = false;
    setLoading(true);
    setPage(1);
    setSearch(value);
  };

  return (
    <main className={styles.peopleMain}>
      <Search search={search} handleSearch={handleSearch} />

      {characters.map((character: ICharacter) => (
        <HeroCard key={character.id} character={character} />
      ))}

      <div className={styles.pagination}>
        <Pagination
          color="primary"
          count={pages}
          page={page || 1}
          onChange={handleChange}
        />
      </div>
    </main>
  );
}
