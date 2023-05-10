import { useSession } from '@supabase/auth-helpers-react'
import NavbarSession from '@/components/NavbarSession'
import Footer from '@/components/Footer'
import Services from '@/components/Services'

const Home = () => {
  const session = useSession()

  if (!session)
  return (
    <> 
      <NavbarSession session={session} />
      <Services />
      <Footer />
    </>
  ) 
  
  if (session)
  return (
    <> 
      <NavbarSession session={session} />
      <Services />
      <Footer />
    </>
  )
}

export default Home