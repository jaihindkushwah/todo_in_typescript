import React from "react";
import ItemsRender from "../components/ItemsRenders";
import useTodos, { todoType } from "../Hooks/useTodos";
import AddTodo from "../components/AddTodo";
import TodoInput from "../components/TodoInput";

type Props = {};

const data: todoType[] = [];
export default function Home(props: Props) {
  const {
    input,
    todoHandler,
    handleKeyDown,
    todoAddHandler,
    todos,
    doneHandler,
    deleteHandler,
    inputRef,
  } = useTodos(data);

  return (
    <div className="w-[40%] mt-20 mb-10">
      <h1 className="p-2 rounded-md mb-5 pl-10 pr-10 w-full text-center bg-white uppercase text-3xl font-semibold space-x-2]">
        Todo App
      </h1>
      <div className="flex gap-5 bg-white justify-start items-center p-10 flex-col rounded-md">
        <div className="p-5 rounded-md mb-20 text-center w-full bg-green-400 sticky top-2">
          <TodoInput
            input={input}
            todoHandler={todoHandler}
            inputRef={inputRef}
            handleKeyDown={handleKeyDown}
          />
          <AddTodo todoAddHandler={todoAddHandler} />
        </div>
        <ItemsRender
          todos={todos}
          deleteHandler={deleteHandler}
          doneHandler={doneHandler}
        />
      </div>
    </div>
  );
}
