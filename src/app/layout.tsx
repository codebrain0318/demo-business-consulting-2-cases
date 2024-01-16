import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

// Bootstarp CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// font awesome
import '@/styles/fontawesome-free/css/all.min.css'

// Theme CSS
import '@/styles/theme.css';
import '@/styles/theme-elements.css';
import '@/styles/theme-blog.css';
import '@/styles/theme-shop.css';
import '@/styles/custom.css';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';



const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Demo Business Consulting 2 | Porto - Multipurpose Website Template',
  description: 'Porto - Multipurpose Website Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.variable}`}>
        <Header/>
        {children}
        <Footer/>  
      </body>
    </html>
  )
}
