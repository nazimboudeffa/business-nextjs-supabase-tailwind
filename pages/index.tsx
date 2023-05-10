import { useSession } from '@supabase/auth-helpers-react'
import NavbarSession from '@/components/NavbarSession'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Dashboard from '@/components/Dashboard'

const Home = () => {
  const session = useSession()

  if (!session)
  return (
    <> 
      <NavbarSession session={session} />
      <Hero />
      <Footer />
    </>
  ) 
  
  if (session)
  return (
    <> 
      <NavbarSession session={session} />
      <Dashboard />
      <Footer />
    </>
  )
}

export default Home
