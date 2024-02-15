import React, { memo } from "react";
import { todoType } from "../Hooks/useTodos";

interface itemCardType extends todoType {
  deleteHandler: (id: number) => void;
  doneHandler: (id: number) => void;
}

function ItemCard({
  id,
  name,
  done,
  date,
  deleteHandler,
  doneHandler,
}: itemCardType) {
  return (
    <div className="p-5 rounded-md mb-1 w-full pl-20 pr-20 flex  justify-between items-center flex-row bg-yellow-200">
      <div>
        <p className={`${done ? "line-through" : ""}`}>
          <span className="font-bold mr-2">Title :</span>{" "}
          {name?.[0].toUpperCase() + name?.slice(1)}
        </p>
        <p className="mt-5">
          <span className="font-bold mr-2">{"Date :"}</span>
          {date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear()}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <button
          className="ml-10 p-2 pr-8 pl-8 rounded-md bg-blue-700 hover:bg-blue-500 text-white"
          onClick={() => doneHandler(id)}
          disabled={done}
        >
          Done
        </button>
        <button
          onClick={() => deleteHandler(id)}
          className="ml-10 p-2 pr-8 pl-8 rounded-md bg-red-700 hover:bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default memo(ItemCard);
