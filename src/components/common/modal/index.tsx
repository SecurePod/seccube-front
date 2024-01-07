'use client'

import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useSpring, animated } from '@react-spring/web'

interface FadeProps {
  children: React.ReactElement
  in?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void
  onExited?: (node: HTMLElement, isAppearing: boolean) => void
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { children, in: open, onClick, onEnter, onExited, ...other } = props
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onEnter(null as any, true)
      }
    },
    onRest: () => {
      if (!open && onExited) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onExited(null as any, true)
      }
    },
  })

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  )
})

const themeStyles = {
  default: {
    bgcolor: 'background.paper',
    color: 'black',
  },
  error: {
    bgcolor: 'red',
    color: 'white',
  },
  warning: {
    bgcolor: 'orange',
    color: 'black',
  },
  success: {
    bgcolor: 'green',
    color: 'white',
  },
}

interface SpringModalProps {
  text: string
  theme?: 'default' | 'error'
  children: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export default function SpringModal({
  text,
  theme = 'default',
  children,
  isOpen,
  onClose,
}: SpringModalProps) {
  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    ...themeStyles[theme],
  }

  return (
    <div>
      <Modal
        aria-labelledby='spring-modal-title'
        aria-describedby='spring-modal-description'
        open={isOpen || false}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Typography id='spring-modal-title' variant='h6' component='h2'>
              {text}
            </Typography>
            <Typography id='spring-modal-description' sx={{ mt: 2 }}>
              {children}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
