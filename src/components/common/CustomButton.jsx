import React from "react";

function CustomButton({ title, className }) {
  return <button className={`cus-btn ${className}`}>{title}</button>;
}

export default CustomButton;
