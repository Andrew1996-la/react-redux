import React from "react";
import { Task } from "../types";
import { TaskListItem } from "../style/ListItemStyle";
import CreateElement from "./UI/CreateElement";
import CloseTask from "./UI/CloseTask";
import TaskCheckbox from "./UI/TaskCheckbox";

export interface ListItemProps {
  task: Task;
}

const ListItem = ({ task }: ListItemProps) => {
  return (
    <TaskListItem className="listItem">
      <TaskCheckbox task={task.id} checked={task.completed} />
      <span tabIndex={0}>
        <CreateElement task={task} />
      </span>
      <CloseTask task={task.id} />
    </TaskListItem>
  );
};

export default React.memo(ListItem);
