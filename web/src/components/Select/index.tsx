import React, { SelectHTMLAttributes } from 'react'

import { SelectBlock } from './style'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  options: Array<{
    value: string
    label: string
  }>
}

export const Select: React.FC<SelectProps> = ({ children, name, label, options, ...rest }) => {
  return (
    <SelectBlock>
      <label htmlFor={ name }>{ label }</label>
      <select { ...rest } id={ name }>
        <option value="" disabled hidden>Selecione uma opção</option>
        { options.map( option => {
          return (
            <option key={ option.value } value={ option.value }>
              { option.label }
            </option>
          )
        } ) }
      </select>
    </SelectBlock>
  )
}
