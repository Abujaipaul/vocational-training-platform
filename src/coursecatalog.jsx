import CourseCard from "./coursecard"
import { usePlatformStore } from "./platformstore"

export default function CourseCatalog(){
    const {course} = usePlatformStore()

    return (
        <>
          <div id="courses" className="mb-20">
            <div className="flex justify-center font-extrabold text-2xl mt-3 mb-10 ">
                <h1>Available Course</h1>
            </div>
            <div className="flex flex-wrap gap-40 max-sm:gap-10 max-md:gap-10 max-lg:gap-10 max-xl:gap-20 justify-center ">
                {
                  course.map((item) => (
                    
                    <CourseCard key={item.id} title={item.title} image={item.image} duration={item.duration} price={item.price}  />
                  ))
                }
               
            </div>
          </div>
        </>
    )
}