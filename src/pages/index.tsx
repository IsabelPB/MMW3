import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Young_Serif } from "next/font/google";

import HeaderMain from '@/components/HeaderMain'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-red-100'>
      <div className=''>
        <HeaderMain />
      </div>
      <div>
        <h1 className='text-black text-center my-40 text-5xl font-serif'>
        Movies&Music
        </h1>
      </div>
    </main>
  )
}
