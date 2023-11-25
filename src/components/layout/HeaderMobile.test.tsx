import { beforeEach, describe, expect, test, vi } from 'vitest'
import { cleanup, fireEvent, render } from '@testing-library/react'
import React from 'react'
import { HeaderMobile } from './HeaderMobile'

const useSidebarMock = vi.fn()
vi.mock('@/hooks/useSidebar', () => ({
  useSidebar: () => ({
    toggleSidebar: useSidebarMock,
  }),
}))

describe('HeaderMobile', () => {
  beforeEach(cleanup)

  test('renders the card correctly', () => {
    const { getByTestId } = render(<HeaderMobile />)
    expect(getByTestId('sidebar-button-overlay')).toBeInTheDocument()
  })

  test('calls toggleSidebar on button click', () => {
    const { getByTestId } = render(<HeaderMobile />)

    fireEvent.click(getByTestId('sidebar-button-overlay'))

    expect(useSidebarMock).toHaveBeenCalled()
  })
})
