import React, { FC, useState } from "react";
import { changeTask, toggleEditMode } from "../../store/todoSlice";
import { useAppDispatch } from "../../hooks";
import { ListItemProps } from "../ListItem";

const CreateElement: FC<ListItemProps> = ({ task: { editMode, id, text } }) => {
  const [note, setNote] = useState(text);
  const dispatch = useAppDispatch();

  const setTask = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNote(e.target.value);
  };

  const actionTask = () => {
    dispatch(changeTask({ id: id, text }));
    dispatch(toggleEditMode(id));
  };

  const handleBlur = () => {
    actionTask();
  };
  const handleEditMode = () => {
    dispatch(toggleEditMode(id));
  };
  const handleKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      actionTask();
    }
  };
  return (
    <>
      {editMode ? (
        <input
          type="text"
          ref={(input) => input && input.focus()}
          onChange={setTask}
          value={note}
          onBlur={handleBlur}
          onKeyDown={handleKeyDownEnter}
        />
      ) : (
        <span onDoubleClick={handleEditMode}>{note}</span>
      )}
    </>
  );
};

export default CreateElement;
