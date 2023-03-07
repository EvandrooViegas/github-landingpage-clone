import React from 'react'

interface IProps {
    children: JSX.Element
}
export default function ShadowIcon({ children }:IProps) {
  return (
    <button>
        {children}
   
    </button>
  )
}
