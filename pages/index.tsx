import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '@/components/Account'
import Navbar from '@/components/Navbar'

const Home = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <>
      
      {!session ? (
        <div className="container mx-auto p-6">
          <div className="h-screen mx-auto max-w-sm">
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
          </div>
        </div>
      ) : (
        <Account session={session} />
      )}
    </>
  )
}

export default Home
