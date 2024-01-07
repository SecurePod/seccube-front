'use client'
import { useMDXComponents } from '@/libs/mdx/mdx-component'
import Guide from './guide.mdx'
import Layout from '@/app/(lab)/[tag]/[...id]/lab-layout'
import dynamic from 'next/dynamic'
import Accordion from '@/components/lab/accordion/accordion'
import { ContentProps } from '../types'
import { ContainerInformation } from '@/libs/docker/api'

const Term = dynamic(() => import('@/components/lab/term'), {
  ssr: false,
})

const props = {
  name: 'sshBrute',
}

const GuideData: React.FC<ContainerInformation> = (data: ContainerInformation) => {
  const components = useMDXComponents({ Guide })
  return (
    <>
      <Guide components={components} {...props} />
      <Accordion title='1. 動作を確認する'>説明</Accordion>
      <p>TargetIP : {data[0].containerIp}</p>
    </>
  )
}

const sshBrute: React.FC<ContentProps> = ({ data }) => {
  console.log(data)
  return (
    <>
      <Layout
        data={{
          guideData: <GuideData {...data} />,
          tabsData: [
            {
              name: 'Terminal',
              content: (
                <>
                  <Term id={data[0].id} />
                </>
              ),
            },
          ],
        }}
      />
    </>
  )
}

export default sshBrute
