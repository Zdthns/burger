import React from "react";

import style from "./burgerIngredients.module.css";

import PropTypes from "prop-types";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import CardBlock from "../CardBlock/CardBlock";

function BurgerIngredients({ openModal }) {
  const bunRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainRef = React.useRef(null);
  const [current, setCurrent] = React.useState("Булки");

  function tabs(value) {
    setCurrent(value);
    switch (value) {
      case "Булки": {
        bunRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "Соусы": {
        sauceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      case "Начинки": {
        mainRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      }
      default: {
        bunRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  const handleScroll = (evt) => {
    const container = evt.target;
    const containerTop = container.getBoundingClientRect().top;
    const bunTop = bunRef.current.getBoundingClientRect().top;
    const sauceTop = sauceRef.current.getBoundingClientRect().top;
    const mainTop = mainRef.current.getBoundingClientRect().top;
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
}

BurgerIngredients.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default BurgerIngredients;
