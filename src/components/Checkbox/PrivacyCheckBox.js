import React from "react";
import "./checkbox.scss";

function PrivacyCheckBox({ text, anch, link, name }) {
  return (
    <div className="check-box check-box--privacy">
      <input name={name} type="checkbox" />
      <label htmlFor={name}>
        {text}
        <a href={link}>{anch}</a>.
      </label>
    </div>
  );
}

export default PrivacyCheckBox;
