'use client'

import React, { useState, useEffect } from 'react'
import { HOST } from '@/config/config'

interface IframeProps {
  port: number
  path?: string
}

const Iframe: React.FC<IframeProps> = (props) => {
  const [count, setCount] = useState(0)
  const [host, setHost] = useState<string | undefined>(undefined)

  useEffect(() => {
    setHost(HOST)
  }, [count])

  return (
    <>
      <button
        onClick={() => {
          setCount((count) => count + 1)
        }}
      >
        Reset
      </button>
      <iframe
        width={800}
        height={800}
        key={count}
        src={`https://p${props.port}.${host}/${props.path}`}
      ></iframe>
    </>
  )
}

export default Iframe
