import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>My page</title>
      </Head>
      <main className=' bg-black min-h-screen'>
        <h1 className='text-center text-white'>Galaxy Library</h1>
      </main>
    </>
  )
}
