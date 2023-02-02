import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// fontes externas
import { Inter, Rajdhani } from '@next/font/google'

// Contextos
import { ChallengeContext } from '../contexts/ChallengsContext'
import { useState } from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
})


export default function App({ Component, pageProps }: AppProps) {
  const [level, setLevel] = useState(1)

  function levelUp(){
    setLevel(level + 1)
  }

  return (
    <div className={`${inter.variable} ${rajdhani.variable} font-sans`}>
      <ChallengeContext.Provider value={{level, levelUp}}>
        <Component {...pageProps} />
      </ChallengeContext.Provider>
    </div>
  )
}
