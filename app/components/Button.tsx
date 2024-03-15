import React from "react";

const Button = ({ styles, name, type }: { styles: string, name: string, type?: "button" | "submit" | "reset" | undefined }) => (
  <button
    type={type ?? "button"}
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    {name}
  </button>
);

export default Button;
