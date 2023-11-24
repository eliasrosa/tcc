import { beforeEach, describe, expect, test } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import React from 'react'
import { SidebarMenuItem } from './SidebarMenuItem'
import { Calculator } from '@phosphor-icons/react'

describe('SidebarMenuItem', () => {
  beforeEach(cleanup)

  test('renders the menu item correctly', () => {
    const label = 'Minha Carteira'

    const { getByText } = render(
      <SidebarMenuItem label={label} icon={Calculator} href="/" />,
    )

    const elLabel = getByText(label)
    expect(elLabel).toHaveTextContent(label)
  })
})
