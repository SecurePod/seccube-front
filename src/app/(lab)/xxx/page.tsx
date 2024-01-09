'use client'

import ConfettiExplosion from 'react-confetti-explosion'
import React from 'react'

export default function Page() {
  const [isExploding, setIsExploding] = React.useState(false)
  return (
    <>
      <button onClick={() => setIsExploding(true)}>explode</button>
      {isExploding && <ConfettiExplosion />}
    </>
  )
}
