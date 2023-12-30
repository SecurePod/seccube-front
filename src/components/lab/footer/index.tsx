'use client'

import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link'

const Footer: React.FC = () => {
  const test = () => {
    console.log('test')
  }

  return (
    <>
      <div className={styles.relativeContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <Link href='/'>
              <button className={styles.button}>
                <svg
                  className={styles.icon}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                  ></path>
                </svg>

                <span className={styles.hidden}>レッスン一覧</span>
              </button>
            </Link>
          </div>
          <div className={styles.justifyEnd}>
            <Link href='#abc'>
              <button className={`${styles.button} ${styles.answerBtn}`}>
                <svg
                  className={styles.icon}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                  ></path>
                </svg>
                <span className={styles.hidden}>ヒント</span>
              </button>
            </Link>
            <span>
              <button onClick={test} className={`${styles.button} ${styles.submit}`}>
                できた！
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
