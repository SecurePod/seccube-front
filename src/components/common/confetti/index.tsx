'use client'

import Confetti from 'canvas-confetti'

export function Cheer() {
  Confetti({
    particleCount: 30,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
  })
  // right
  Confetti({
    particleCount: 30,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
  })
}
