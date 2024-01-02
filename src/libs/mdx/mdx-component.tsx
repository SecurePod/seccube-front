'use client'

import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => {
      return <h2 className='mt-10 text-3xl font-bold' {...props} />
    },
    h3: (props) => {
      return <h3 className='mt-8 text-xl font-bold' {...props} />
    },
    code: ({ children, ...props }) => {
      if (typeof children === 'string') {
        return (
          <code className='bg-gray-100 p-1 rounded text-red-600' {...props}>
            {children}
          </code>
        )
      } else {
        return (
          <code className='p-4 m-2' {...props}>
            {children}
          </code>
        )
      }
    },
    ...components,
  }
}
