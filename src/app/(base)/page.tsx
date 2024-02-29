import React from 'react'
import { NextPage } from 'next'
import HomeLayout from './home-layout'

const page: NextPage = () => {
  return (
    <>
      <HomeLayout>
        <h1>SEC-CUBE</h1>
        <p>ここには何もありません。コース一覧へ行ってください</p>
      </HomeLayout>
    </>
  )
}

export default page
