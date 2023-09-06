"use client"; 

import Image from 'next/image'
import Banner from './components/banner'
import ListaCursos from './components/listaCursos'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Banner>Texto cabecera</Banner>
      <main className="container">
        <ListaCursos/>
      </main>
    </>
  )
}
