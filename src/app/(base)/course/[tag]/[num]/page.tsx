import CourseLayout from './course-layout'
import React from 'react'
import { Metadata } from 'next'

interface Props {
  params: {
    tag: string
    num: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.tag,
  }
}

export default function Page() {
  return (
    <>
      <CourseLayout>
        <h1>ここに演習の説明を書く</h1>
      </CourseLayout>
    </>
  )
}
