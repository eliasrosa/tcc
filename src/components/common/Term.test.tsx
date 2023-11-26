import { beforeEach, describe, expect, test, vi } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import { Term } from './Term'
import React from 'react'

const openModalMock = vi.fn()

vi.mock('@/hooks/useModal', () => ({
  useModal: () => ({
    openModal: openModalMock,
  }),
}))

describe('Term', () => {
  beforeEach(cleanup)

  test('calls openModal when the term is rendered', () => {
    render(<Term />)
    expect(openModalMock).toHaveBeenCalled()
  })
})
