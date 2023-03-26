import { FC, useMemo } from "react";
import style from "./style.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TCount, IngredientType } from "../../../utils/types/types";

type PropsType = {
  ingredient: string;
  count: TCount;
  allIngredients: IngredientType[];
};

const IngredientInfo: FC<PropsType> = ({
  ingredient,
  count,
  allIngredients,
}) => {
  const currentIngredient: any = useMemo(() => {
    if (!ingredient || 0) return null;
    return allIngredients.find((item) => ingredient === item._id);
  }, [ingredient, allIngredients]);

  return (
    <section className={style.ingredient_info}>
      <div className={style.info}>
        <div className={style.border}>
          <div className={style.item}>
            <img
              className={style.img}
              src={currentIngredient?.image}
              alt={currentIngredient?.name}
            />
          </div>
        </div>
        <p className={`text text_type_main-default ml-4 mr-4 ${style.text}`}>
          {currentIngredient?.name}
        </p>
      </div>
      <div className={style.qty_container}>
        <p className="text text_type_digits-default mr-2">{`${
          count[currentIngredient._id]
        } x ${currentIngredient?.price}`}</p>
        <CurrencyIcon type="primary" />
      </div>
    </section>
  );
};

export default IngredientInfo;
