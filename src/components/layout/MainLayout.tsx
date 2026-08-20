import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export function MainLayout() {
  return (
    <>
     
      <Header />
      <main className="min-h-screen pt-[76px] sm:pt-[88px]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
