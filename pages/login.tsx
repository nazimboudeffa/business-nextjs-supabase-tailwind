import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import NavbarSession from '@/components/NavbarSession'
import Welcome from '@/components/Welcome'
import Footer from '@/components/Footer'

const Login = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <>
      {!session ? (
        <>
        <NavbarSession session={session} />
        <div className="container mx-auto p-6">
          <div className="h-screen mx-auto max-w-sm">
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" providers={['google']} magicLink/>
          </div>
        </div>
        <Footer />
        </>
      ) : (
        <>
        <NavbarSession session={session} />
        <Welcome/>
        <Footer />
        </>
      )}
    </>
  )
}

export default Login