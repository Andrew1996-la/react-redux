import React from "react";
import Input from "./components/Input";
import List from "./components/List";
import ToDoApp from "./style/AppStyle";

function App() {
  return (
    <ToDoApp className="app">
      <Input />
      <List />
    </ToDoApp>
  );
}

export default App;
