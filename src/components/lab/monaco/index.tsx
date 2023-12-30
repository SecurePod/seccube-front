'use client'

import Editor, { Monaco, loader } from '@monaco-editor/react'
import React, { useRef, useState } from 'react'

const files: Record<string, File> = {
  'script.js': {
    name: 'script.tsx',
    language: 'typescript',
    value: `type MyReadonly<T> = {
readonly [K in keyof T]: T[K]
}
    
interface Todo {
title: string
description: string
}

const todo: MyReadonly<Todo> = {
title: "Hey",
description: "foobar"
}`,
  },
  'style.css': {
    name: 'style.css',
    language: 'css',
    value: 'someCSSCodeExample',
  },
  'index.html': {
    name: 'index.html',
    language: 'html',
    value: `type MyReadonly<T> = {
      readonly [K in keyof T]: T[K]
    }
    
    interface Todo {
      title: string
      description: string
    }
    
    const todo: MyReadonly<Todo> = {
      title: "Hey",
      description: "foobar"
    }`,
  },
}

interface File {
  name: string
  language: string
  value: string
}

const reqBody = {
  code: '',
  path: './index.php',
  containerId: '6ddcd4eacf95c220bda36d132cbcaa169d20620529c8bb745911fd488a4956be',
}

const Manaco: React.FC = () => {
  const editorRef = useRef<Monaco | null>(null)

  loader.init().then((monaco) => {
    monaco.editor.defineTheme('myTheme', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {},
    })
  })

  function handleEditorDidMount(editor: Monaco) {
    editorRef.current = editor
  }

  const sendCode = async () => {
    if (editorRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      reqBody.code = editorRef.current.getValue()
    }

    const result = await fetch('http://localhost:8081/api/v1/docker/write', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...reqBody,
      }),
    })
      .then((res) => {
        return res.json()
      })
      .catch(() => {
        return 'error'
      })
    console.log(result)
  }

  const [fileName, setFileName] = useState<string>('script.js')
  const file = files[fileName]

  return (
    <>
      <button onClick={sendCode}>Show value</button>
      <button disabled={fileName === 'script.js'} onClick={() => setFileName('script.js')}>
        script.js
      </button>
      <button disabled={fileName === 'style.css'} onClick={() => setFileName('style.css')}>
        style.css
      </button>
      <button disabled={fileName === 'index.html'} onClick={() => setFileName('index.html')}>
        index.html
      </button>
      <Editor
        height='80vh'
        theme='myTheme'
        path={file.name}
        options={{
          fontSize: 16,
        }}
        // defaultLanguage={data.mode}
        // defaultValue={data.code}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onMount={handleEditorDidMount}
      />
    </>
  )
}

export default Manaco
