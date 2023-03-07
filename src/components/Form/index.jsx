import { React, useState } from "react";

const Form = ({ list, setList }) => {
  const [value, setValue] = useState("");
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setList([
            ...list,
            {
              description: value,
              index: list.length,
            },
          ]);
        }}
      >
        +
      </button>
    </form>
  );
};

export default Form;
