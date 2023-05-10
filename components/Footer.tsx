function Footer () {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
            </svg>
            <p>ACME Industries Ltd.</p>
                <p>Made with ❤ on <a href="https://github.com/nazimboudeffa/business-app-nextjs-supabase-tailwind">GitHub</a>
                </p>
            </div> 
            <div>
                <span className="footer-title">Social</span> 
                <div className="grid grid-flow-col gap-4">
                <a href="https://www.facebook.com/profile.php?id=100066235554730"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer