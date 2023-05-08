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
            <div class="h-screen mx-auto max-w-sm">
            <div className="flex flex-col p-6 rounded shadow bg-white">
                <p className="py-8 text-center text-xl">
                    No need for a password!
                </p>
                <div className="flex flex-col">
                    <input type="text" placeholder="Type your Email" class="input input-bordered input-primary w-full mb-3" />
                    <button className="btn btn-primary mb-3" onClick={signIn}>
                        Login
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login