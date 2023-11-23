import { beforeEach, describe, expect, test, vi } from 'vitest'
import { cleanup, fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Main } from './Main'

const sideBarMock = {
  toggleSidebar: vi.fn(),
  isOpen: true,
}

vi.mock('@/hooks/useSidebar', () => ({
  useSidebar: () => sideBarMock,
}))

describe('Main', () => {
  beforeEach(cleanup)

  test('renders the card correctly', () => {
    const { findAllByText } = render(<Main>main content</Main>)
    expect(findAllByText('main content')).toBeTruthy()
  })

  test('calls toggleSidebar on button click', () => {
    const { getByTestId } = render(<Main>main content</Main>)

    fireEvent.click(getByTestId('button'))

    expect(sideBarMock.toggleSidebar).toHaveBeenCalled()
  })

  test('renders the backdrop when sidebar is open', () => {
    sideBarMock.isOpen = false
    const { queryByTestId, getByText } = render(<Main>main content</Main>)

    expect(getByText('main content')).toBeTruthy()
    expect(queryByTestId('button')).toBeNull()
  })
})
