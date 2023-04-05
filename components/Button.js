import React from "react";

const Button = ({
  border,
  bg,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  cursor,
  fontSize,
  fontWeight,
  cl,
  style,
  ...props
}) => {
  return (
    <button
      className={cl}
      onClick={onClick}
      {...props}
      style={{
        backgroundColor: bg,
        border,
        borderRadius: radius,
        height,
        width,
        color: color,
        cursor: cursor,
        fontSize: fontSize,
        fontWeight: fontWeight,
        ...style
      }}
    >
      {children}
    </button>
  );
}

export default Button;