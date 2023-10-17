import Image from 'next/image'
import { Inter } from 'next/font/google'

import HeaderMain from '@/components/HeaderMain'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='p-4 fixed top-0 right-0 '>
        <HeaderMain />
      </div>
    </main>
  )
}
