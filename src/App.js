import { React, useState } from "react";
import ToDoList from "./components/ToDoList"
import Form from "./components/Form";

function App() {
  const [list, setList] = useState([])
  return (
    <>
      <Form list={list} setList={setList} />
      <ToDoList list={list} setList={setList} />
    </>
  );
}

export default App;
