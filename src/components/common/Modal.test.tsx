import { beforeEach, describe, expect, test, vi } from 'vitest'
import { cleanup, fireEvent, render } from '@testing-library/react'
import Modal from './Modal'
import React from 'react'

const closeModalMock = vi.fn()

const useModalMock = {
  title: 'Title',
  content: 'content...',
  showModal: true,
  closeBtnTitle: 'close',
  closeModal: closeModalMock,
}

vi.mock('@/hooks/useModal', () => ({
  useModal: () => useModalMock,
}))

describe('Modal', () => {
  beforeEach(cleanup)

  test('renders the modal correctly', () => {
    const { getByRole, getByTestId } = render(<Modal />)

    const buttom = getByRole('button', { name: /close/i })
    expect(buttom).toBeInTheDocument()

    const title = getByTestId('title')
    expect(title).toBeInTheDocument()
    expect(title.textContent).toBe('Title')

    const content = getByTestId('content')
    expect(content).toBeInTheDocument()
    expect(content.textContent).toBe('content...')
  })

  test('calls closeModal when the close button is clicked', () => {
    const { getByTestId } = render(<Modal />)

    fireEvent.click(getByTestId('close-btn'))

    expect(closeModalMock).toHaveBeenCalled()
  })

  test('does not render the modal when showModal is false', () => {
    useModalMock.showModal = false

    const { container } = render(<Modal />)
    expect(container).toBeEmptyDOMElement()
  })
})
