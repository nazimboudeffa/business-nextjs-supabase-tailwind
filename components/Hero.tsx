function Hero () {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Allbizzz</h1>
                <p className="mb-5">The place where you make money while sleeping</p>
                </div>
            </div>
        </div>
    )
}

export default Hero