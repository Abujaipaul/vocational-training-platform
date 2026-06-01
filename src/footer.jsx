import vocationalLogo from "./assets/vocational-logo.png"


export default function Footer(){


    return(
        <>
          <div className="flex flex-wrap justify-between max-sm:flex-col-reverse max-sm:gap-10 max-md:gap-10 max-md:flex-col-reverse max-md:justify-center  pl-9 pt-20 pb-20 pr-9 text-white bg-slate-900">
             <div className="flex flex-col items-center gap-3.5">
                <img src={vocationalLogo} className='w-2xs' alt="logo" />
               
                <p> &copy; 2026. All rights reserved.</p>

             </div>
             <div className="flex gap-10 max-sm:justify-center max-md:justify-center">
                <button className="hover:opacity-25">Terms of Service</button>
                <button className="hover:opacity-25">Privacy Policy</button>
                <button className="hover:opacity-25">Contact Us</button>          
             </div>
          </div>
        </>
    )
}