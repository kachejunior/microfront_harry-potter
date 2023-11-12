import { createKey } from "next/dist/shared/lib/router/router";
import styled from "styled-components";

const ListAttributeDiv = styled.div`
  ul {
    li {
      list-style: none;
      span {
        font-weight: 900;
        margin-right: 10px;
      }
    }
  }
`;

export const ListAttributes = ({
  listAttribute,
}: {
  listAttribute: { title: string; value: string }[];
}) => {
  return (
    <ListAttributeDiv>
      <ul>
        {listAttribute.map((attr: { title: string; value: string }) => (
          <li key={createKey()}>
            <span>{attr.title}:</span>
            {attr.value}
          </li>
        ))}
      </ul>
    </ListAttributeDiv>
  );
};
