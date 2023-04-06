'use client'

import { useState } from 'react'
import { TabList, Tab } from '@tremor/react'

export function Tabs() {
  const [value, setValue] = useState('home')
  return (
    <TabList value={value} onValueChange={setValue}>
      <Tab value="home" text={'Home'} />
      <Tab value="MXRF11" text={'MXRF11'} />
      <Tab value="XPLG11" text={'XPLG11'} />
    </TabList>
  )
}
