import heroImage from './assets/hero-image.png'

export default function Hero(){


    return (
        <>
          <div className='flex flex-wrap max-sm:flex-col max-sm:items-center max-sm:text-center mt-2 mb-7 bg-slate-900 text-white'>
            <div className='w-1/2 flex flex-col items-center justify-center gap-10 p-5 max-sm:w-full'>
                <h1 className='text-2xl font-bold'>Master High-Income Physical & Digital Skills</h1>
                <p>Welcome to the ultimate launchpad for modern wealth creation. Our platform bridges the gap between traditional craftsmanship and the digital frontier, delivering elite, actionable training in both high-demand physical trades and lucrative online industries. Whether you want to master hands-on technical skills or dominate the digital marketplace, we provide the tools, mentorship, and blueprints you need to secure your financial freedom.</p>
                <div>
                    <button className='text-white bg-cyan-500 p-3 rounded-xl hover:opacity-75'>Start Learning Today</button>
                </div>
            </div>
            <div className='w-1/2 h-screen max-sm:w-3/4 max-sm:h-1/2 mb-16 '>
                <img src={heroImage} className='w-full h-full rounded-2xl' loading='lazy' alt="woman in a workshop" />
            </div>
          </div>
        </>
    )
}