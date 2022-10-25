import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: number;
  text: string;
  editMode: boolean;
  completed: boolean;
};

export type ArrayTodo = {
  todos: Todo[];
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addNewTask(state: ArrayTodo, action: PayloadAction<string>) {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        editMode: false,
        completed: false,
      });
    },
    deleteTask(state: ArrayTodo, action: PayloadAction<number>) {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
    },
    markTask(state: ArrayTodo, action: PayloadAction<number>) {
      const task: Todo | undefined = state.todos.find(
        (task) => task.id === action.payload
      );
      if (!task) return;

      task.completed = !task.completed;
    },
    toggleEditMode(state: ArrayTodo, action: PayloadAction<number>) {
      const task: Todo | undefined = state.todos.find(
        (task) => task.id === action.payload
      );
      if (!task) return;

      task.editMode = !task.editMode;
    },
    changeTask(
      state: ArrayTodo,
      action: PayloadAction<{ id: number; text: string }>
    ) {
      const task: Todo | undefined = state.todos.find(
        (task) => task.id === action.payload.id
      );
      if (!task) return;

      task.text = action.payload.text;
    },
    completedAll(state: ArrayTodo) {
      state.todos.forEach((task) => {
        task.completed = true;
      });
    },
    deleteCompleted(state: ArrayTodo) {
      state.todos = state.todos.filter((task) => !task.completed);
    },
  },
});

export const {
  addNewTask,
  completedAll,
  deleteCompleted,
  markTask,
  deleteTask,
  toggleEditMode,
  changeTask,
} = todoSlice.actions;
export default todoSlice.reducer;
