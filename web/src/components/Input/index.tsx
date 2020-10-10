import React, { InputHTMLAttributes } from 'react'

import { InputBlock } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

export const Input: React.FC<InputProps> = ({ children, name, label, ...rest }) => {
  return (
    <InputBlock>
      <label htmlFor={ name }>{ label }</label>
      <input { ...rest } id={ name }/>
    </InputBlock>
  )
}
