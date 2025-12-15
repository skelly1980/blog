import React from "react";

type Props = {
  children: React.ReactNode;
  type: "primary" | "outline" | "warning" | "secondary" | "tertiary" | "mobile";
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
};

const classes = {
    primary: "px-4 py-2 uppercase bg-[var(--color-black)] text-[var(--color-white)]] border-2",
    outline: "px-4 py-2 uppercase border-2 border-[var(--color-white)] text-[var(--color-white)] hover:bg-[rgba(0,0,0,0.5)] hover:text-[var(--color-white)]",
    warning: "uppercase w-full px-3.5 py-2 rounded-sm mb-4 text-white bg-red-600 hover:bg-red-600/80",
    tertiary: "uppercase text-white bg-gray-600 hover:bg-gray-600/80 w-full py-2 rounded-sm",
    secondary: "px-4 py-2 uppercase border-2 border-[var(--color-black)] text-[var(--color-black)] hover:bg-transparent hover:border-[var(--color-white)]",
    mobile: "bg-none"
}

export const Button = (props: Props) => {
  const { children, type, onClick, disabled } = props;
  const style = classes[type];

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
