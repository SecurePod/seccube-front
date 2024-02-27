'use client'

import React from 'react'
import { useState } from 'react'
import { HOST } from '@/config/config'

interface IframeProps {
  port: number
}

const Iframe: React.FC<IframeProps> = (props) => {
  const [count, setCount] = useState(0)

  return (
    <>
      <button
        onClick={() => {
          setCount((count) => count + 1)
        }}
      >
        Reset
      </button>
      <iframe width={800} height={800} key={count} src={`https://p${props.port}.${HOST}`}></iframe>
    </>
  )
}

export default Iframe
