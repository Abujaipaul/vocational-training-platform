import { useState } from "react"
import { supabase } from "./supabaseClient"
import { useNavigate } from "react-router-dom"
import { usePlatformStore } from "./platformstore"

export default function Signup(){
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [loading, setLoading] = useState(false)
     const navigate = useNavigate()
     const {setUser} = usePlatformStore()



      async function handleSubmit(el){
      el.preventDefault()
       if(!email || !password){
        alert('Please input your email and password')
        return
       }
         
        setLoading(true)

       const {data, error} = await supabase.auth.signUp({
       email: email,
       password: password,
       })
       
        if(error){
            alert("Error: " + error.message); // Tells the user if password is wrong
        } else {
            console.log("Success! Here is the user data:", data);
            setUser(data.user)
            navigate('/');
        }

       
    //    else{
    //     console.log(email, password)
    //    }
      setLoading(false)
      setEmail("")
      setPassword("")
     }

    return(
        <>
          <div>
              <div className="max-w-2xl mx-auto shadow-lg my-20 rounded-2xl p-15 pb-10 text-lg">
            <form onSubmit={(e) => handleSubmit(e)}>
             <div className="flex flex-col ">
                <label htmlFor="email">Email Address </label><br />
                <input type="email" value={email} placeholder='johndoe@yahoo.com' onChange={(e) => setEmail(e.target.value)} className="border-2 rounded-2xl p-2" /> <br />
                 <label htmlFor="name" >Password</label><br />
                <input type="password" value={password} placeholder='********' onChange={(e) => setPassword(e.target.value)} className="border-2 rounded-2xl p-2" /> <br />
                
            </div>
                
                  <div className="flex justify-center mt-10">
                    <button type="submit" className="text-xl bg-slate-900 text-white p-3 rounded-2xl hover:opacity-80">
                   
                        {
                            loading ? 'Signing in' : 'Signup'
                        }
                        </button>
                  </div>
                   <p className="text-center mt-4 text-sm">
                    Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>Login here</span>
                    </p>
                
            </form>
          </div>
          </div>
        </>
    )
}