import React from "react";

const Statuses = ({ text, setStatus }) => {
  return (
    <label>
      <input
        className="hidden peer"
        type="radio"
        name="statuses"
        value={text}
        defaultChecked={text === "All"}
        onChange={() => setStatus(text)}
      />
      <span className="text-l-dark-grayish-blue hover:text-d-very-dark-grayish-blue-second cursor-pointer dark:hover:text-d-light-grayish-blue peer-checked:text-primary-bright-blue peer-checked:font-bold">
        {text}
      </span>
    </label>
  );
};

export default Statuses;
