import { beforeEach, describe, expect, test } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import React from 'react'
import { Card } from './Card'

describe('Card', () => {
  beforeEach(cleanup)

  test('renders the card correctly', () => {
    const { getByTestId } = render(
      <Card title="Title" subtitle="Subtitle">
        <div data-testid="children">Content</div>
      </Card>,
    )

    expect(getByTestId('title')).toBeInTheDocument()
    expect(getByTestId('title').textContent).toBe('Title')

    expect(getByTestId('subtitle')).toBeInTheDocument()
    expect(getByTestId('subtitle').textContent).toBe('Subtitle')

    expect(getByTestId('children')).toBeInTheDocument()
    expect(getByTestId('children').textContent).toBe('Content')
  })
})
