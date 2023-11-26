import { beforeEach, describe, expect, test } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import { Title } from './Title'
import React from 'react'

describe('Title', () => {
  beforeEach(cleanup)

  test('renders the title correctly', () => {
    const { getByTestId } = render(
      <Title>
        <span data-testid="children">Title Text</span>
      </Title>,
    )

    expect(getByTestId('children')).toBeInTheDocument()
    expect(getByTestId('children').textContent).toBe('Title Text')
  })

  test('applies additional class names correctly', () => {
    const { getByText } = render(
      <Title className="custom-class">Title Text</Title>,
    )

    expect(getByText('Title Text')).toHaveClass('custom-class')
  })
})
