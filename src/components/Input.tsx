import React, { useState } from "react";
import ButtonsPanel from "./UI/ButtonsPanel";
import { useAppDispatch } from "../hooks";
import { addNewTask } from "../store/todoSlice";
import { InputTask, InputText } from "../style/InputStyle";

const Input = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useAppDispatch();
  const addTask = () => dispatch(addNewTask(inputValue));

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const sendForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue !== "") {
      addTask();
    }

    setInputValue("");
  };

  return (
    <form className="InputProps" onSubmit={sendForm}>
      <InputText>
        <span>Enter your task:</span>
        <InputTask
          onChange={handleInput}
          placeholder="Enter"
          value={inputValue}
          type="text"
        />
      </InputText>
      <ButtonsPanel />
    </form>
  );
};

export default Input;
