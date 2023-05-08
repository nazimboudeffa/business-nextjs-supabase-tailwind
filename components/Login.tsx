import { useState, useEffect } from 'react'
import { supabase } from '@/supabase'

function Login () {

    const [submitted, setSubmitted] = useState(false)

    const [email, setEmail] = useState('')
    
    const signIn = async () => {
        console.log(email)
        if (!email) alert('Please enter a valid email')
        try {
            let { data, error } = await supabase.auth.signInWithOtp({
                email: email
              })
            console.log(data) 
            console.log(error) 
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitted(true)
        }
    }
    

    return (
        <div className="container mx-auto p-8">
            <div className="h-screen mx-auto max-w-sm">
            <div className="flex flex-col p-6 rounded shadow bg-white">      
                {
                    submitted ? 
                    <div className="alert alert-success shadow-lg mb-3">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Check your Email to connect!</span>
                        </div>
                    </div>
                    : 
                    <div>
                    <p className="py-8 text-center text-xl text-black">
                        No need for a password!
                    </p>
                        <div className="flex flex-col">
                            <input type="text" placeholder="Type your Email" className="input input-bordered input-primary w-full mb-3" onChange={e => setEmail(e.target.value)}/>
                            <button className="btn btn-primary mb-3" onClick={signIn}>
                                Login
                            </button>
                        </div>
                    </div>
                }
            </div>
            </div>
        </div>
    )
}

export default Login