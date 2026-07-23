import { create } from "zustand"
import welding from './assets/welding.png'
import frontEnd from './assets/frontend.png'
import carpenter from './assets/carpenter.png'

interface CourseItem {
  id: number;
  image: string;
  title: string;
  duration: string;
  price: number;
}

interface PlatformStore {
  // We use the small blueprint here! This says: "course is a list of CourseItems"
  course: CourseItem[]; 
  
  // This says: "selectedCourse is either an object with a title and price, or it's empty (null)"
  selectedCourse: { title: string; price: number } | null;
  
  // This says: "user can be anything for now"
  user: any; 
  
  // These describe your functions. They take data in, and return nothing (void).
  setSelectedCourse: (course: { title: string; price: number } | null) => void;
  setUser: (sessionUser: any) => void;
}



export const usePlatformStore = create<PlatformStore>()(function (set) {

   return{
     course : [
        {id : 1, image : welding, title : "Advanced Welding", duration : "12 Weeks", price : 150000 },
        {id : 2, image : frontEnd, title : "Frontend Engineering", duration : "12 Weeks" , price : 150000},
        {id : 3, image : carpenter, title : "Commercial Carpentry", duration : "12 Weeks" , price : 150000}
    ],
    selectedCourse : null,
    user : null,

    setSelectedCourse : function (course){
      set(function () {
         return {
            selectedCourse : course
         }
      })
    },
     setUser : function (sessionUser) {
       set(function () {
         return {
            user : sessionUser
         }
       })
     }
   }
})


///lol..no need for state parameter..updating nothing at all

// setSelectedCourse : function (course){
//       set(function (state) {
          

//          return {
//             selectedCourse : {course, ...state.selectedCourse}
//          }
//       })
//     }