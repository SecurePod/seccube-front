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

export default function Page({ params }: Props) {
  console.log(params.num)
  return (
    <>
      <CourseLayout>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
        <h1>aaa</h1>
      </CourseLayout>
    </>
  )
}
