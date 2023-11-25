import { beforeEach, describe, expect, test, vi } from 'vitest'
import { cleanup, fireEvent, render } from '@testing-library/react'
import React from 'react'
import { FormCard } from './index'

const addTickersMock = vi.fn()
vi.mock('@/hooks/useTickers', () => ({
  useTickers: vi.fn(() => ({
    addTickers: addTickersMock,
  })),
}))

describe('FormCard', () => {
  beforeEach(cleanup)

  test('renders the form card correctly', () => {
    const { getByText, getByRole } = render(<FormCard />)
    const addButton = getByRole('button', { name: 'Adicionar' })

    expect(getByText('Fundos imobiliários')).toBeInTheDocument()
    expect(getByText('Selecione os fundos imobiliários')).toBeInTheDocument()
    expect(addButton).toBeInTheDocument()

    fireEvent.click(addButton)
    expect(addTickersMock).toHaveBeenCalledTimes(1)
  })
})
