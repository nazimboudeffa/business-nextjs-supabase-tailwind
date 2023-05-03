import { useState } from 'react'
import { supabase } from '../supabase'

function Hero () {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const signIn = async () => {
        if (!email) alert('Please enter a valid email')
        try {
            let { data, error } = await supabase.auth.signInWithOtp({
                email
            }, { redirectTo : process.env.NEXT_PUBLIC_SITE_URL })
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitted(true)
        }
    }
    if (submitted){
        return (
            <>
            <div className="alert alert-success shadow-lg">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Check your Email for the connection link</span>
            </div>
            </div>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <input type="text" placeholder="Type your Email" className="input input-bordered input-primary w-full max-w-xs" onChange={e => setEmail(e.target.value)} />
                    <button className="btn btn-primary" onClick={signIn}>Get Started</button>
                    </div>
                </div>
            </div>
            </>
        )
    } else {
        return (
            <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <input type="text" placeholder="Type your Email" className="input input-bordered input-primary w-full max-w-xs" onChange={e => setEmail(e.target.value)} />
                    <button className="btn btn-primary" onClick={signIn}>Get Started</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero