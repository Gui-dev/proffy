import React, { TextareaHTMLAttributes } from 'react'

import { TextareaBlock } from './style'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label: string
}

export const Textarea: React.FC<TextareaProps> = ({ children, name, label, ...rest }) => {
  return (
    <TextareaBlock>
      <label htmlFor={ name }>{ label }</label>
      <textarea { ...rest } id={ name }/>
    </TextareaBlock>
  )
}
