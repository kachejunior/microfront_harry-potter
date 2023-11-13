import { render } from "@testing-library/react";
import { ListAttributes } from "@/app/components/ListAttributes/ListAttributes";
import "@testing-library/jest-dom";
import { describe } from "node:test";

const LIST_ATTRIBUTES = [
  { title: "Titulo 1", value: "Resultado 1" },
  { title: "Titulo 2", value: "Resultado 2" },
  { title: "Titulo 3", value: "Resultado 3" },
  { title: "Titulo 4", value: "Resultado 4" },
];

describe("ListAttributes component", () => {
  it("renders 4 attributes", () => {
    const { container } = render(
      <ListAttributes listAttribute={LIST_ATTRIBUTES} />
    );
    const li = container.getElementsByTagName("li");
    expect(li).toHaveLength(4);
  });
});
