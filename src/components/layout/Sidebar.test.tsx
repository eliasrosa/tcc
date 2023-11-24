import { beforeEach, describe, expect, test, vi } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import React from 'react'
import { Sidebar } from './Sidebar'

const sideBarMock = {
  isOpen: true,
}

vi.mock('@/hooks/useSidebar', () => ({
  useSidebar: () => sideBarMock,
}))

describe('Sidebar', () => {
  beforeEach(cleanup)

  test('renders the sidebar correctly', () => {
    const { getAllByTestId } = render(<Sidebar />)
    const items = getAllByTestId('sidebar-menu-item')

    expect(items.length).toBe(2)
    expect(items[0]).toHaveTextContent('Minha Carteira')
    expect(items[1]).toHaveTextContent('Simulador')
  })

  test('renders the sidebar correctly when it is closed', () => {
    sideBarMock.isOpen = false
    const { getByTestId } = render(<Sidebar />)
    expect(getByTestId('sidebar')).not.toHaveClass('left-0')
  })

  test('renders the sidebar correctly when it is open', () => {
    sideBarMock.isOpen = true
    const { getByTestId } = render(<Sidebar />)
    expect(getByTestId('sidebar')).toHaveClass('left-0')
  })
})
