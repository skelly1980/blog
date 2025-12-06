import React from "react";

type Props = {
  children: React.ReactNode;
  type: "outline" | "warning" | "secondary" | "tertiary" | "mobile";
  color: "outlineBlack" | "outlineWhite" | "red";
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
};

const classes = {
    outline: "px-4 py-2 uppercase",
    warning: "uppercase w-full px-3.5 py-2 rounded-sm mb-4",
    tertiary: "uppercase text-white bg-gray-600 hover:bg-gray-600/80 w-full py-2 rounded-sm",
    secondary: "px-4 py-2 uppercase",
    mobile: "bg-none"
}

const colors = {
  outlineBlack: "border-2 border-[var(--color-black)] text-[var(--color-white)] hover:bg-transparent hover:border-[var(--color-white)]",
  outlineWhite: "border-2 border-[var(--color-white)] text-[var(--color-white)] hover:bg-[rgba(0,0,0,0.5)] hover:text-[var(--color-white)]",
  red: "text-white bg-red-600 hover:bg-red-600/80",
}

export const Button = (props: Props) => {
  const { children, type, onClick, disabled, color } = props;
  const style = `${classes[type]} ${colors[color]}`;

  return (
    <button
      onClick={onClick}
      className={`${style} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
