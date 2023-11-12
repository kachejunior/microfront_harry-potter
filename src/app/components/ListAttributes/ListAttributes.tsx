import { createKey } from "next/dist/shared/lib/router/router";
import styles from "./listAttributes.module.scss";

export const ListAttributes = ({
  listAttribute,
}: {
  listAttribute: { title: string; value: string }[];
}) => {
  return (
    <div className={styles.listAttr}>
      <ul>
        {listAttribute.map((attr: { title: string; value: string }) => (
          <li key={createKey()}>
            <span>{attr.title}:</span>
            {attr.value}
          </li>
        ))}
      </ul>
    </div>
  );
};
