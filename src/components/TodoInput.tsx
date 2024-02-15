import React from "react";

type Props = {
  input: string;
  todoHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
};

const TodoInput = ({ input, inputRef, todoHandler, handleKeyDown }: Props) => {
  return (
    <input
      className="p-2 w-full mb-4 rounded-md"
      type="text"
      value={input}
      onChange={todoHandler}
      onKeyDown={handleKeyDown}
      ref={inputRef}
    />
  );
};

export default TodoInput;
