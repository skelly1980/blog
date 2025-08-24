import React from 'react'

type Props = {
    children:React.ReactNode;
}

export const ButtonSecondary = (props: Props) => {
  return (
    <button className='btn-secondary'>{props.children}</button>
  )
}

