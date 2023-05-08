import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import { useRouter } from 'next/router'

function Login () {

    const [submitted, setSubmitted] = useState(false)
    const router = useRouter()

    const [email, setEmail] = useState('')
    
    const signIn = async () => {
        console.log(email)
        if (!email) alert('Please enter a valid email')
        try {
            let { data, error } = await supabase.auth.signInWithOtp({
                email: email
              })
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitted(true)
        }
    }

    const fetchProfile = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser()
            if (!user){
                //router.push('/')
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
        <div className="container mx-auto p-8">
            <div class="mx-auto max-w-sm">
            <div className="bg-white rounded shadow">
                <div className="border-b py-8 font-bold text-black text-center text-xl tracking-widest uppercase">
                    No need for a password!
                </div>

                <div className="mb-3">
                    <input className="border w-full p-3" name="email" type="text" placeholder="e-mail" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="flex">
                    <button className="bg-primary hover:bg-primary-dark w-full p-4 text-sm text-white uppercase font-bold tracking-wider" onClick={signIn}>
                        Login
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login