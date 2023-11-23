import { beforeEach, describe, expect, test, vi } from 'vitest'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { TooltipHelper } from './TooltipHelper'
import React from 'react'

const openModalMock = vi.fn()
vi.mock('@/hooks/useModal', () => ({
  useModal: () => ({
    openModal: openModalMock,
  }),
}))

describe('TooltipHelper', () => {
  beforeEach(cleanup)

  test('renders the tooltip correctly', () => {
    const { getByTestId } = render(
      <TooltipHelper title="Title" content="content..." />,
    )

    expect(getByTestId('tooltip-button')).toBeInTheDocument()
  })

  test('opens the modal when the button is clicked', () => {
    const { getByTestId } = render(
      <TooltipHelper title="Title" content="content..." />,
    )

    fireEvent.click(getByTestId('tooltip-button'))

    expect(openModalMock).toHaveBeenCalled()
  })
})
