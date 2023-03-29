import React, { FC } from "react";

import style from "./burgerIngredients.module.css";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import CardBlock from "../CardBlock/CardBlock";
import { IngredientType } from "../../utils/types/types";

type PropsType = {
  openModal: (item: IngredientType) => void;
};

const BurgerIngredients: FC<PropsType> = ({ openModal }) => {
  const bunRef = React.useRef<HTMLLIElement>(null);
  const sauceRef = React.useRef<HTMLLIElement>(null);
  const mainRef = React.useRef<HTMLLIElement>(null);
  const [current, setCurrent] = React.useState("Булки");

  function tabs(value: string) {
    setCurrent(value);
    switch (value) {
      case "Булки": {
        bunRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "Соусы": {
        sauceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "Начинки": {
        mainRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      }
      default: {
        bunRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  const handleScroll = (evt: any) => {
    const container = evt.target;
    const containerTop = container?.getBoundingClientRect().top as number;
    const bunTop = bunRef.current?.getBoundingClientRect().top as number;
    const sauceTop = sauceRef.current?.getBoundingClientRect().top as number;
    const mainTop = mainRef.current?.getBoundingClientRect().top as number;
    const offset = [
      { name: "Булки", value: Math.abs(containerTop - bunTop) },
      { name: "Соусы", value: Math.abs(containerTop - sauceTop) },
      { name: "Начинки", value: Math.abs(containerTop - mainTop) },
    ];
    const closest = offset.sort((a, b) => a.value - b.value)[0].name;
    if (current !== closest) {
      setCurrent(closest);
    }
  };

  return (
    <section className={`${style.container} mr-10`}>
      <h2 className={`${style.title} text_type_main-large mt-10 mb-5`}>
        Соберите бургер
      </h2>
      <nav className={`${style.tabs} mb-8`}>
        <Tab value="Булки" active={current === "Булки"} onClick={tabs}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === "Соусы"} onClick={tabs}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === "Начинки"} onClick={tabs}>
          Начинки
        </Tab>
      </nav>
      <ul className={`${style.item}  pl-4 pr-2`} onScroll={handleScroll}>
        <CardBlock type="bun" name="Булки" onClick={openModal} ref={bunRef} />
        <CardBlock
          type="sauce"
          name="Соусы"
          onClick={openModal}
          ref={sauceRef}
        />
        <CardBlock
          type="main"
          name="Начинки"
          onClick={openModal}
          ref={mainRef}
        />
      </ul>
    </section>
  );
};

export default BurgerIngredients;
