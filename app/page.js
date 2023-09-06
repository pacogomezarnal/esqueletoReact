import Image from 'next/image'
import Banner from './components/banner'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Banner/>
      <main className="container">
        <h1>Comenzando con React</h1>
      </main>
    </>
  )
}
