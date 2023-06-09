import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '@/components/Account'
import NavbarSession from '@/components/NavbarSession'
import Footer from '@/components/Footer'

const Profile = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <>
      {!session ? (
        <>
        <NavbarSession session={session} />
        <div className="container mx-auto p-6">
          <div className="h-screen mx-auto max-w-sm">
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
          </div>
        </div>
        <Footer />
        </>
      ) : (
        <>
        <NavbarSession session={session} />
        <Account session={session} />
        <Footer />
        </>
      )}
    </>
  )
}

export default Profile