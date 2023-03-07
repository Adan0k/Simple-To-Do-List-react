import React from "react";
import ToDo from "../ToDo";

const ToDoList = ({ list, setList }) => {
  return (
    <>
      <ul>
        {list.map((e) => (
          <ToDo
            description={e.description}
            del={() => deleteIten(list, setList, e.index)}
          />
        ))}
      </ul>
    </>
  );
};
const deleteIten = (list, set, index) => {
  const temp = list.filter((e) => e.index != index);
  set(temp);
};

export default ToDoList;
