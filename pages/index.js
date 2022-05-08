import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sample Store</title>
      </Head>
      <Navbar/>
      <div>Store data</div>
    </div>
  )
}
