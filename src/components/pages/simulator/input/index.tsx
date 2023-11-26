/* eslint-disable react/display-name */
import { Text, TextInput } from '@tremor/react'
import React, { ForwardedRef, forwardRef } from 'react'

interface Props {
  testid: string
  title: string
  defaultValue?: string
  placeholder?: string
}

export const Input = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div data-testid={`simulator-total-${props.testid}`}>
        <Text>{props.title}</Text>
        <TextInput
          defaultValue={props.defaultValue}
          placeholder={props.placeholder ?? props.defaultValue}
          data-testid={`simulator-input-${props.testid}`}
          ref={ref}
        />
      </div>
    )
  },
)
