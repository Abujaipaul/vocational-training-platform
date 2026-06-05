import { useNavigate } from "react-router-dom"
import { usePlatformStore } from "./platformstore"


export default function CourseCard({title, image, duration, price}){
    const {selectedCourse, setSelectedCourse} = usePlatformStore()

    const navigate = useNavigate()
     console.log(selectedCourse)

    return(
        <>
    
            <div className="flex flex-col items-center gap-3 shadow-lg p-3 rounded-xl max-sm:w-3/4 "> 
                       <div className='w-3xs h-64 max-sm:w-3/4 max-sm:h-96'>
                        <img src={image}  className="w-full h-full" alt={title} />
                       </div>
                       <h1 className="font-bold">{title}</h1>
                       <p>{duration}</p>
                        <div>
                         <button onClick={() => { navigate("/checkout") ; setSelectedCourse({title, price}) }} className='text-white bg-cyan-500 p-2 rounded-xl hover:opacity-75'>View Details</button>
                        </div>
             </div>
         
        </>
    )
}