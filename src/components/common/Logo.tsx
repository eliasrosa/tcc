'use client'

import { config } from '@/config'

export function Logo() {
  return (
    <div className="inline-flex">
      <a href="/" className="inline-flex flex-row items-center">
        <span className="leading-10 text-white text-2xl ml-1 uppercase">
          {config.app.metadata.title.default}
        </span>
      </a>
    </div>
  )
}
