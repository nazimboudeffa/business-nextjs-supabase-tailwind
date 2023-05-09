import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react';
import { supabase } from '@/supabase'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(false)
  const fetchProfile = async () => {
    try {
            const { data: { user } } = await supabase.auth.getUser()
            if (!user){
              console.log(loggedIn)
              router.push('/')
            } else {
              setLoggedIn(true)
              console.log(loggedIn)
              router.push('/dashboard')
            }
        } catch (error) {
            console.log(error)
        } finally {
            console.log('finally')
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

  return (
    <>
      <Navbar loggedIn={loggedIn} />
      <Hero />
      <Footer />
    </>
  )
}
