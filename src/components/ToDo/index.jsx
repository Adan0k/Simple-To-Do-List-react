import React from "react";

const ToDo = ({ description, del }) => {
  return (
    <>
      <li>
        <span>{description}</span>
        <button onClick={() => del()}>-</button>
      </li>
    </>
  );
};

export default ToDo;
