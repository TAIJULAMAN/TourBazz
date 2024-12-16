import React from "react";

const Button = ({
  title = "Click Me",
  backgroundColor = "bg-[#cb6ce6]",
  textColor = "text-white",
  hoverBackgroundColor = "hover:bg-[#6a50d4]",
  hoverTextColor = "hover:text-white",
  className = "",
  onClick,
  ariaLabel = "button",
}) => {
  return (
    <button
      className={`
        ${backgroundColor} 
        ${textColor} 
        rounded-full 
        px-8 
        py-3 
        font-semibold 
        shadow-md 
        hover:shadow-lg 
        transition-all 
        duration-300 
        transform 
        hover:scale-105
        ${hoverBackgroundColor} 
        ${hoverTextColor}
        ${className}
      `}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {title}
    </button>
  );
};

export default Button;
