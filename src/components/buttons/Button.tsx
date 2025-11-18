import React from "react";

type Props = {
  children: React.ReactNode;
  type: "outline" | "warning" | "secondary" | "tertiary" | "mobile";
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
};

const classes = {
    outline: "btn-primary border-2 border-[var(--color-white)] text-[var(--color-white)]",
    warning: "uppercase text-white bg-red-600 hover:bg-red-600/80 w-full px-3.5 py-2 rounded-sm mb-4",
    tertiary: "uppercase text-white bg-gray-600 hover:bg-gray-600/80 w-full py-2 rounded-sm",
    secondary: "btn-secondary",
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
