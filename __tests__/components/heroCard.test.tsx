import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import HeroCard from "@/app/components/HeroCard/HeroCard";

const HeroCardMock = {
  id: 1,
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  name: "Rick Sanchez",
  species: "Human",
  status: "Alive",
  gender: "Male",
  type: "Human",
};

describe("HeroCard component", () => {
  it("renders Herocard of rick sanchez", () => {
    const { container } = render(
      <HeroCard key={HeroCardMock.id} character={HeroCardMock} />
    );
    const card = container.getElementsByClassName("card");
    expect(card[0]).toContainHTML("<h1>Rick Sanchez</h1>");
  });
});
