import React from "react";
import InputUI from "./InputUI";
import { useAppDispatch } from "../../hooks";
import { deleteCompleted } from "../../store/todoSlice";
import { completedAll } from "../../store/todoSlice";
import ButtonPanel from "../../style/ButtonPanelStyle";

const ButtonsPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const completedAllTasks = () => dispatch(completedAll());
  const deleteCompletedTasks = () => dispatch(deleteCompleted());

  return (
    <ButtonPanel>
      <InputUI type="submit" value="ok" />
      <InputUI type="button" value="Mark All" onClick={completedAllTasks} />
      <InputUI
        type="button"
        value="Delete completed"
        onClick={deleteCompletedTasks}
      />
    </ButtonPanel>
  );
};

export default React.memo(ButtonsPanel);
