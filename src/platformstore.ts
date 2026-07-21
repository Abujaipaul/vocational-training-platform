import { create } from "zustand"
import welding from './assets/welding.png'
import frontEnd from './assets/frontend.png'
import carpenter from './assets/carpenter.png'

// 1. Blueprint for the main courses in your array
interface CourseItem {
  id: number;
  image: string;
  title: string;
  duration: string;
  price: number;
}

// 2. Blueprint for what gets sent to the checkout page
interface SelectedCourse {
  title: string;
  price: number;
}

// 3. The Master Blueprint for the entire Zustand Store
interface PlatformStore {
  course: CourseItem[];
  selectedCourse: SelectedCourse | null;
  user: any; // Leaving as 'any' for now since Supabase handles the auth object
  setSelectedCourse: (course: SelectedCourse | null) => void;
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