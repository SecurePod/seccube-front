import Layout from '@/app/(lab)/[tag]/[...id]/lab-layout'
import dynamic from 'next/dynamic'
import Iframe from '@/components/lab/iframe'
import { ContentProps } from '../types'

const Term = dynamic(() => import('@/components/lab/term'), {
  ssr: false,
})

const Monaco = dynamic(() => import('@/components/lab/monaco'), {
  ssr: false,
})

const Httpd: React.FC<ContentProps> = ({ data }) => {
  console.log(data)
  return (
    <>
      <Layout
        data={{
          guideData: <></>,
          tabsData: [
            {
              name: 'Terminal',
              content: (
                <>
                  <Term id={data[0].id} />
                </>
              ),
            },
            {
              name: 'Editor',
              content: (
                <>
                  <Monaco />
                </>
              ),
            },
            {
              name: 'Iframe',
              content: (
                <>
                  <Iframe port={8001} />
                </>
              ),
            },
          ],
        }}
      />
    </>
  )
}

export default Httpd
