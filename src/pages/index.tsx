import Image from 'next/image'
import { Inter } from 'next/font/google'

import HeaderMain from '@/components/HeaderMain'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-white'>
      <div className=''>
        <HeaderMain />
      </div>
    </main>
  )
}
