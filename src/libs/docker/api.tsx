import { API_URL } from '@/config/config'

type ConInfo = {
  id: string
  port: string
}

/**
 * コンテナを起動する
 * @param {string} tag
 * @returns {Promise<ConInfo{string, string}>}
 */
export async function getConStart(tag: string): Promise<ConInfo> {
  const res = await fetch(`http://${API_URL}/api/v1/docker/create/${tag}`, {
    method: 'POST',
  })
  const data: ConInfo = await res.json()
  return data
}

type ContainerInspectList = {
  id: string
}[]

export type ContainerInformation = {
  id: string
  containerIp: string
  hostPorts: number[]
  containerPorts: number[]
  labels: string[]
}[]

/**
 * コンテナの情報を取得する
 * @param {string} tag
 * @param {string} id
 * @returns {Promise<DockerInstanceInfo{string, string}>}
 */
export async function getConInfo(id: string[]) {
  const jsonData: ContainerInspectList = id.map((id) => {
    return {
      id: id,
    }
  })
  console.log(jsonData)

  const res = await fetch(`http://localhost:8081/api/v1/docker/inspect`, {
    method: 'POST',
    body: JSON.stringify(jsonData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data: ContainerInformation = await res.json()
  console.log(data)
  return data
}

// export async function Fet(tag: string) {
//   const router = useRouter()
//   try {
//     const data = await fetchData(tag)
//     router.push(`/${tag}/${data.id}`)
//   } catch (error) {
//     console.error('Error fetching data:', error) // エラー時はポップアップを表示したい
//   }
// }
