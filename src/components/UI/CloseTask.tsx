import { ListItemClose } from "../../style/ListItemStyle";
import React from "react";
import { deleteTask } from "../../store/todoSlice";
import { useAppDispatch } from "../../hooks";

interface CloseTaskProps {
  task: number;
}

const CloseTask = (props: CloseTaskProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(props.task));
  };
  return (
    <ListItemClose tabIndex={0} onClick={handleDelete}>
      &#10006;
    </ListItemClose>
  );
};

export default React.memo(CloseTask);
