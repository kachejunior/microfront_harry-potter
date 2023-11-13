import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import { Search } from "@/app/components/Search/Search";

const SearchProp = {
  search: "Buscar",
  handleSearch: () => {},
  handleSubmit: () => {},
};

describe("Search component", () => {
  it("renders Search", () => {
    const { container } = render(
      <Search
        search={SearchProp.search}
        handleSearch={SearchProp.handleSearch}
        handleSubmit={SearchProp.handleSubmit}
      />
    );
    const form = container.getElementsByTagName("form");
    expect(form[0]).toContainHTML("input");
  });
});
