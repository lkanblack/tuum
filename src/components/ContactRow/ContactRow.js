import React from "react";
import { Link } from "@mui/material";
import "./contactRow.scss";

function ContactRow({ email, text }) {
  return (
    <div className="contact-row">
      <p>{text}</p>
      <Link
        style={{
          color: "#5c6b7c",
          textDecoration: "none",
        }}
        href={`mailto:${email}`}
      >
        {email}{" "}
      </Link>
    </div>
  );
}

export default ContactRow;
