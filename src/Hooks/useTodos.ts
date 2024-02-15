import React from "react";

export type todoType = {
  name: string;
  id: number;
  done: boolean;
  date: Date;
};

export default function useTodos(data: todoType[]) {
  const [todos, setTodos] = React.useState<todoType[]>(data);
  const [input, setInput] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const todoHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (!input) {
      inputRef.current?.focus();
      return;
    }
    if (e.key === "Enter") {
      todoAddHandler();
    }
  };

  const todoAddHandler = (): void => {
    if (!input) {
      inputRef.current?.focus();
      return;
    }
    setTodos([
      ...todos,
      { name: input, id: todos.length, done: false, date: new Date() },
    ]);
    setInput("");
  };
  const doneHandler = (id: number): void => {
    const newTodo = todos.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setTodos(newTodo);
  };

  const deleteHandler = (id: number): void => {
    const newTodo = todos.filter((item) => item.id !== id);
    setTodos(newTodo);
  };

  return {
    todos,
    input,
    setInput,
    todoHandler,
    handleKeyDown,
    todoAddHandler,
    setTodos,
    inputRef,
    doneHandler,
    deleteHandler,
  };
}
