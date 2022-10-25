import React from "react";
import { markTask } from "../../store/todoSlice";
import { useAppDispatch } from "../../hooks";

interface TaskCheckboxProps {
  task: number;
  checked: boolean;
}

const TaskCheckbox = (props: TaskCheckboxProps) => {
  const dispatch = useAppDispatch();

  const handleMark = () => {
    dispatch(markTask(props.task));
  };

  return (
    <input type="checkbox" checked={props.checked} onChange={handleMark} />
  );
};

export default React.memo(TaskCheckbox);
