import { supabase } from "@/supabase"
import { useEffect, useState } from "react"

function Reset () {
    const [password, setPassword] = useState('')
    const changePassword =async () => {
        const { data, error } = await supabase.auth.updateUser({ password: password })

        if (data) alert("Password updated successfully!")
        if (error) alert("There was an error updating your password.")
    }
    
    return (
        <>
            <div className="container mx-auto p-8">
                <div className="h-screen mx-auto max-w-sm">
                <div className="flex flex-col p-6 rounded shadow bg-white">      
                    <p className="py-8 text-center text-xl text-black">
                        Type your new password
                    </p>
                    <div className="flex flex-col">
                        <input type="password" placeholder="Type your Email" className="input input-bordered input-primary w-full mb-3" onChange={e => setPassword(e.target.value)}/>
                        <button className="btn btn-primary mb-3" onClick={()=>changePassword()}>
                            Reset Password
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Reset