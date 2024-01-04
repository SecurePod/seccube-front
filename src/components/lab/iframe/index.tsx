'use client'

import React from 'react'
import { useState } from 'react'
import { HOST_NAME } from '@/config/config'

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
      <iframe width={800} height={500} key={count} src={'http://localhost:' + props.port}></iframe>
    </>
  )
}

export default Iframe
