import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bloggy</title>
        <meta name="description" content="create your now blog" />
       
      </Head>


        

        <div className='backgrounder text-center py-20'>
            <h1 className='text-center text-3xl font-bold pt-20 text-white '>Create your own blog</h1>
            <p className='text-center text-white py-1'>Follow your passion and share your passion to others</p>
            <Link href={'/Blogging'}><button className='bg-black text-white py-2 px-4 my-2 rounded-md text-center hover:text-black hover:bg-gray-300 active:bg-white  '>Create a Blog</button></Link>
        </div>

        <div className='backgrounder2'>
          <div className='md:text-right md:mr-96 m-2 pt-60'>
            <h1 className='font-bold text-2xl'>Follow your passion</h1>
            <p>Create a Blog on your intrest and share with others</p>
          </div>
        </div>

        


      

      
    </>
  )
}
