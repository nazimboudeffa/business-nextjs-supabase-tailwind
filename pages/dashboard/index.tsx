import Link from 'next/link'
import { supabase } from '../../supabase'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Stats from '../../components/Stats'
import ApexChart from '../../components/ApexChart'
import ChartDatetime from '../../components/ChartDatetime'
import Sidenav from '../../components/Sidenav'

export default function Dashboard () {
    const [user, setUser] = useState('')
    const router = useRouter()

    const fetchProfile = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser()
            if (!user){
                //router.push('/')
            } else {
                console.log(user)
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

    const signOut = async () => {
        await supabase.auth.signOut()
        router.push('/')
    }

    //if (!user) return null
    return (
        <>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="/products">Products</Link></li>
                    <li><a>Contact</a></li>
                </ul>
                </div>
                <Link href="/" className="btn btn-ghost normal-case text-xl">Allbizzz</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><Link href="/services">Services</Link></li>
                </ul>
            </div>
            <div className="navbar-end flex-none">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a onClick={signOut}>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
        <div className='flex'>
        <Sidenav />
        <div className="container mx-auto">
            <Stats />
            <ChartDatetime />
        </div>
        </div>
        </>
    )
}