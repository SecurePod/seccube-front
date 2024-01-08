'use client'

import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useSpring, animated } from '@react-spring/web'
import WarningIcon from '@mui/icons-material/Warning'
import { Button } from '@mui/material'

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

interface SpringModalProps {
  text?: string
  children: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export function ErrorModal({ children, isOpen, onClose }: SpringModalProps) {
  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    boxShadow: 24,
    borderRadius: '10px',
    bgcolor: '#fff',
    border: '1px solid #fff',
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px 10px 0 0',
                p: 2,
                bgcolor: '#EF4444',
                color: '#fff',
              }}
            >
              <WarningIcon />
              <Typography sx={{ ml: 1, fontSize: '17px' }} fontWeight={600}>
                エラー
              </Typography>
            </Box>
            <Typography
              id='spring-modal-description'
              sx={{ p: 3, fontSize: '16px', fontWeight: 500 }}
            >
              {children}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
              <Button
                disableRipple
                sx={{}}
                variant='outlined'
                size='medium'
                onClick={onClose}
                color='error'
              >
                閉じる
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default function SpringModal({ text, children, isOpen, onClose }: SpringModalProps) {
  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    bgcolor: '#fff',
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
            <Box>
              <Typography
                sx={{
                  bgcolor: '#EF4444',
                  color: '#fff',
                }}
                variant='h6'
                component='h2'
              >
                Error
              </Typography>
            </Box>
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
