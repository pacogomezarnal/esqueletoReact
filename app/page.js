import Image from 'next/image'
import Banner from './components/Banner'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Banner/>
      <main className={styles.main}>
        <h1>Comenzando con React</h1>
      </main>
    </>
  )
}
