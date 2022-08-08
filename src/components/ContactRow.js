import React from "react";
import { Link } from "@mui/material";

function ContactRow({ email, text }) {
  return (
    <>
      <p>{text}</p>
      <Link
        style={{ color: "#5c6b7c", textDecoration: "none" }}
        href={`mailto:${email}`}
      >
        {email}{" "}
      </Link>
    </>
  );
}

export default ContactRow;
