import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// fontes externas
import { Inter, Rajdhani } from '@next/font/google'
import { ThemeContextProvider } from '@/contexts/ThemeContext'

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


  return (
    <div className={`${inter.variable} ${rajdhani.variable} font-sans dark:bg-zinc-800`}>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </div>
  )
}
