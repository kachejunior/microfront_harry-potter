import { BASE_URL } from "./constants";

export const getCharacter = async (id: string | string[] | undefined) => {
  const response = await fetch(`${BASE_URL}characters/${id}`);
  return await response.json();
};

export const getAllCharacter = async (query?: any) => {
  query["page[size]"] = 10;
  const response = await fetch(
    `${BASE_URL}characters${
      query ? "?" + new URLSearchParams(query).toString() : ""
    }`
  );
  return await response.json();
};
