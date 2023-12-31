import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/layouts/header'
import { CartProvider } from 'use-shopping-cart'
import Providers from '@/components/providers'
import ShoppingCartModal from '@/components/cart'
import Footer from '@/layouts/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <Providers>
        <ShoppingCartModal />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </Providers>
      </body>
    </html>
  )
}
