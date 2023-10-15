import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components/header/header'
import { SideBarLeft } from './components/sideBar/sideBarLeft'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HORA DEV - plataforma',
  description: 'Plataforma de dev para dev.',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className='bg-slate-900 h-screen text-slate-100'>
        <Header />
        <div className='h-screen flex'>
          <SideBarLeft />
          {children}
        </div>
      </body>
    </html>
  )
}
