import { beforeEach, describe, expect, test } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import React from 'react'
import { Logo } from './Logo'
import { config } from '@/config'

describe('Logo', () => {
  beforeEach(cleanup)

  test('renders the logo correctly', () => {
    const { getByText } = render(<Logo />)
    const title = config.app.metadata.title.default

    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(title).textContent).toBe(title)
  })
})
