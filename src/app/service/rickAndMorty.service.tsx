import { BASE_URL } from "./constants";

export const getCharacter = async (id: string | string[] | undefined) => {
  const response = await fetch(`${BASE_URL}character/${id}`);
  return await response.json();
};

export const getAllCharacter = async (query?: any) => {
  const response = await fetch(
    `${BASE_URL}character${
      query ? "?" + new URLSearchParams(query).toString() : ""
    }`
  );
  return await response.json();
};
