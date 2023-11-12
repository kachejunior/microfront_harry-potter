"use client";

import { IHeroCardProps } from "@/app/interfaces";
import { ListAttributes } from "@/app/components/ListAttributes/ListAttributes";
import styles from "./heroCard.module.scss";

export default function HeroCard({ key, character }: IHeroCardProps) {
  const { id, name, image, status, gender, type } = character;
  const ATTRIBUTE_LIST = [
    { title: "Status", value: status },
    { title: "Gender", value: gender },
    { title: "Type", value: type },
  ];
  return (
    <main className={styles.details} key={key}>
      <div
        className={styles.details__block}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.details__block__body}>
          <h1>{name}</h1>
          <ListAttributes listAttribute={ATTRIBUTE_LIST} />
        </div>
      </div>
    </main>
  );
}
