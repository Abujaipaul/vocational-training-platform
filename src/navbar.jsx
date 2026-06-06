import headerLogo from './assets/vocational-logo.png'
import { useNavigate, useLocation } from 'react-router-dom'


export default function NavBar(){
    const navigate = useNavigate()
    const location = useLocation()
    
    //when a user click on browse course it scroll into there
    function handleCourseClick(){
        if(location.pathname === '/'){
            //if true do this
            document.getElementById('courses')?.scrollIntoView({behavior:'smooth'})
        }else{
            //if false do this
            navigate('/')
            setTimeout(() => {
                document.getElementById('courses')?.scrollIntoView({behavior:'smooth'})
            }, 200)
        }
    }
    

    return(
        <>
          <div className='flex flex-wrap max-sm:justify-center max-md:justify-center max-md:gap-5 justify-between p-3.5 pl-8 pr-14 bg-slate-900 text-white sticky top-0 z-50'>
             <div className="header">
                <img onClick={() => navigate('/')} src={headerLogo} className='w-2xs' alt="logo" />
             </div>
             <div className="nav flex justify-between gap-20">
                <div className='pt-5'>
                    <span onClick={handleCourseClick} className='cursor-pointer hover:opacity-35 text-lg'>Browse Course</span>
                </div>
                <div className='pt-5'>
                    <span className='cursor-pointer hover:opacity-35 text-lg'>Student Login</span>
                </div>
             </div>
          </div>
        </>
    )
}