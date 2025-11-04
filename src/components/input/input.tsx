import React from 'react'

type Props = {
    children?: React.ReactNode;
    type: "primary";
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputType?: "text" | "email" | "password";
}

const classes = {
    primary: "border-2 border-gray-600 w-full rounded-sm placeholder:text-gray-600 text-white p-2"
}

export const Input = (props: Props) => {
    const { children, type, placeholder, value, onChange, inputType = "text" } = props;
    const style = classes[type]

  return (
    <input 
      className={style} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={inputType}
    />
  )
}