import React from "react";
import ItemCard from "./ItemCard";
import { todoType } from "../Hooks/useTodos";

type Props = {
  todos: todoType[];
  deleteHandler: (id: number) => void;
  doneHandler: (id: number) => void;
};

const ItemsRender = ({ todos, deleteHandler, doneHandler }: Props) => {
  return (
    <div className="w-full">
      {todos?.map((item, index) => (
        <ItemCard
          deleteHandler={deleteHandler}
          doneHandler={doneHandler}
          key={index}
          {...item}
        />
      ))}
    </div>
  );
};

export default ItemsRender;
