import React from "react";

function CheckboxRow({ content, name }) {
  return (
    <div className="check-box">
      <input name={name} type="checkbox" />
      <label htmlFor={name}>{content}</label>
    </div>
  );
}

export default CheckboxRow;
