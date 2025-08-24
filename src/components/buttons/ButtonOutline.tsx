import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ButtonOutline = (props: Props) => {
  return (
    <button className="btn-primary border-2">
        {props.children}
    </button>
  );
};
