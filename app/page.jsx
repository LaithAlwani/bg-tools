import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex-center felx-col text-center'>
      <h1 className=''>Discover & Share 3d Prints</h1>
      <Feed />
    </section>
  )
}

export default Home