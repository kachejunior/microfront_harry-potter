"use client";

import { IHeroCardProps } from "@/app/interfaces";
import { ListAttributes } from "@/app/components/ListAttributes/ListAttributes";
import styled from "styled-components";

const HeroCardMain = styled.main`
  @media only screen and (min-width: 768px) {
    padding: 30px;
  }
  @media only screen and (max-width: 768px) {
    padding: 15px;
  }
  .card {
    width: 320px;
    margin-top: 10px;
    height: 400px;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: center;
    @media only screen and (min-width: 768px) {
      border: solid 10px #ffffff;
      padding: 20px 30px;
      border-radius: 15px;
      &__container {
        h1 {
          font-size: 30px;
        }
      }
    }
    @media only screen and (max-width: 768px) {
      border: solid 3px #ffffff;
      padding: 15px;
      border-radius: 5px;
      &__container {
        h1 {
          font-size: 35px;
          text-align: center;
        }
      }
    }
  }
`;

export default function HeroCard({ character }: IHeroCardProps) {
  const { id, name, image, status, gender, type } = character;
  const ATTRIBUTE_LIST = [
    { title: "Status", value: status },
    { title: "Gender", value: gender },
    { title: "Type", value: type },
  ];
  return (
    <HeroCardMain>
      <div className="card" style={{ backgroundImage: `url(${image})` }}>
        <div className="card__container">
          <h1>{name}</h1>
          <ListAttributes listAttribute={ATTRIBUTE_LIST} />
        </div>
      </div>
    </HeroCardMain>
  );
}
