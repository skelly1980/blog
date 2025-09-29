import React from 'react'

type Props = {
    children?: React.ReactNode;
    type: "primary";
    placeholder?: string;
}

const classes = {
    primary: "border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 p-2"
}

export const Input = (props: Props) => {
    const { children, type, placeholder } = props;
    const style = classes[type]

  return (
    <input className={style} placeholder={placeholder}>{children}</input>
  )
}