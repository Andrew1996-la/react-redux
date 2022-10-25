import React from "react";
import ListItem from "./ListItem";
import { useAppSelector } from "../hooks";
import { Todo } from "../store/todoSlice";
import ListOfTasks from "../style/ListStyle";

const List = () => {
  const tasks: Todo[] = useAppSelector((state) => state.todos.todos);
  return (
    <ListOfTasks className="list">
      {tasks.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </ListOfTasks>
  );
};

export default List;
