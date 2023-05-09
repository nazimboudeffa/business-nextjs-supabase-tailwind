import Stats from '../../components/Stats'
import ChartDatetime from '../../components/ChartDatetime'
import Sidenav from '../../components/Sidenav'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router'
import { supabase } from '@/supabase'
import { useState, useEffect } from 'react'

function Dashboard () {

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
        <div className="grid min-h-screen md:grid-cols-[auto_1fr] justify-center gap-4 overflow-hidden p-4">
            <Sidenav />
            <div className="min-h-screen w-full bg-slate-300">
                <Stats />
                <ChartDatetime />
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Dashboard