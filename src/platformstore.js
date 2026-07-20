import { create } from "zustand"
import welding from './assets/welding.png'
import frontEnd from './assets/frontend.png'
import carpenter from './assets/carpenter.png'

export const usePlatformStore = create(function (set) {

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