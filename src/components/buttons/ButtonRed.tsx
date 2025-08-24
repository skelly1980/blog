import React from 'react'

type Props = {
    children: React.ReactNode;
}

export const ButtonRed = (props: Props) => {
  return (
    <button className="uppercase text-white bg-red-600 hover:bg-red-600/80 px-3.5 py-2 rounded-sm mb-4" type="submit">
          {props.children}
        </button>
  )
}