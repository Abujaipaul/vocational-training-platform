import headerLogo from './assets/vocational-logo.png'


export default function NavBar(){
    

    return(
        <>
          <div className='flex flex-wrap max-sm:justify-center justify-between p-3.5 pl-8 pr-14 bg-slate-900 text-white'>
             <div className="header">
                <img src={headerLogo} className='w-2xs' alt="logo" />
             </div>
             <div className="nav flex justify-between gap-20">
                <div className='pt-5'>
                    <span className='cursor-pointer hover:opacity-35 text-lg'>Browse Course</span>
                </div>
                <div className='pt-5'>
                    <span className='cursor-pointer hover:opacity-35 text-lg'>Student Login</span>
                </div>
             </div>
          </div>
        </>
    )
}