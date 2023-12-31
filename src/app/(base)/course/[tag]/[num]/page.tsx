import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { resolve } from 'path'

export async function generateMetadata({
  params,
}: {
  params: { tag: string; num: number }
}): Promise<Metadata> {
  return { title: params.tag }
}

export interface CourseParams {
  params: { tag: string; num: number }
}

const postsDirectory = path.join(process.cwd(), '_contents')

export default async function Blogs({ params }: { params: { tag: string; num: string } }) {
  const numStr = params.num.toString()
  const fullPath = resolve(postsDirectory, params.tag, numStr, `index.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  console.log(data)
  console.log(content)
  return (
    <>
      <div>{content}</div>
    </>
  )
}

// function getContent({ params }: CourseParams) {
//   // tagとnumを使ってデータを取得する処理
//   const data = <></>
//   return data
// }

// export default function Page({ params }: CourseParams) {
//   const content: CourseData = {
//     ...getContent({ params }),
//     tag: params.tag,
//     num: params.num,
//   }
//   return (
//     <>
//       <CourseLayout {...content} />
//     </>
//   )
// }
