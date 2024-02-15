import React from "react";

type Props = {
  todoAddHandler: () => void;
};

const AddTodo = ({ todoAddHandler }: Props) => {
  return (
    <button
      className="ml-10 p-2 pr-8 pl-8 rounded-md bg-blue-700 hover:bg-blue-500 text-white"
      onClick={todoAddHandler}
    >
      Add Todo
    </button>
  );
};

export default AddTodo;
