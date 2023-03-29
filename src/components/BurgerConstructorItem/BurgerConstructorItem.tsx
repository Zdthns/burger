import style from "./burgerConstructorItem.module.css";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop, XYCoord } from "react-dnd";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { IngredientType } from "../../utils/types/types";
import {
  deleteIngredientFromConstructor,
  moveItems,
} from "../../services/actions/constructor";

type TconstructorItemProps = {
  item: IngredientType;
  index: number;
};

const BurgerConstructorItem: FC<TconstructorItemProps> = React.memo((props) => {
  const dispatch = useDispatch();

  const deleteElement = (item: IngredientType) => {
    dispatch(deleteIngredientFromConstructor(item.key as string));
  };
  const ref = React.useRef<HTMLDivElement | null>(null);

  const [, drop] = useDrop({
    accept: "constructorIngredient",
    hover: (item: IngredientType, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = props.index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const boundIng = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (boundIng.bottom - boundIng.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - boundIng.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      dispatch(moveItems(dragIndex, hoverIndex));

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "constructorIngredient",
    item: () => {
      return { id: props.item.key, index: props.index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      className={`${style.item} ${isDragging && style.isDragging} mb-4`}
      ref={ref}
      draggable={true}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        text={props.item.name}
        price={props.item.price}
        thumbnail={props.item.image}
        handleClose={() => deleteElement(props.item)}
      />
    </div>
  );
});

export default BurgerConstructorItem;
