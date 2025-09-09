import React from "react";

type Props = {
  children: React.ReactNode;
  type: "outline" | "warning" | "secondary" | "tertiary";
  onClick?: () => void;
};

const classes = {
    outline: "btn-primary border-2",
    warning: "uppercase text-white bg-red-600 hover:bg-red-600/80 px-3.5 py-2 rounded-sm mb-4",
    tertiary: "uppercase text-white bg-gray-600 hover:bg-gray-600/80 w-full py-2 rounded-sm",
    secondary: "btn-secondary",
}

export const Button = (props: Props) => {
    const {children, type, onClick} = props;
 const style = classes[type]

  return <button onClick={onClick} className={style}>{children}</button>;
};
