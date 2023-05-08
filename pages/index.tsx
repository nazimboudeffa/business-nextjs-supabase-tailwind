import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { supabase } from '@/supabase'

export default function Home() {

  const router = useRouter();

  const fetchProfile = async () => {
    try {
          const { data: { user } } = await supabase.auth.getUser()
          if (!user){
              router.push('/')
          } else {
              router.push('/dashboard')
          }
      } catch (error) {
          console.log(error)
      } finally {
          console.log('finally')
      }
  }

  useEffect(() => {
      console.log('useEffect')
      fetchProfile()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  )
}
