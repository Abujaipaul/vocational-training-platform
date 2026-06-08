import { useState } from "react";
// Import the client you built in Mission 2. 
// (Make sure the path './supabaseClient' matches exactly where you saved it)
import { supabase } from "./supabaseClient"; 

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // 1. New loading state to handle the UI while the database thinks
    const [loading, setLoading] = useState(false); 

    // 2. Add 'async' here so we can use 'await' inside the function
    async function handleSubmit(e){
        e.preventDefault();
        
        if(!email || !password){
            alert('Please input your email and password');
            return;
        }

        // 3. Turn on the loading state
        setLoading(true); 

        // 4. The actual Supabase Database Call
        // We ask Supabase to sign in, and we immediately extract the 'data' and 'error' it sends back
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        // 5. Handle the response
        if (error) {
            alert("Error: " + error.message); // Tells the user if password is wrong
        } else {
            console.log("Success! Here is the user data:", data);
            alert("Login Successful!");
        }
        
        // 6. Turn off the loading state and clear inputs
        setLoading(false);
        setEmail("");
        setPassword("");
    }

    return(
        <div className="max-w-2xl mx-auto shadow-lg my-20 rounded-2xl p-15 pb-10 text-lg">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="email">Email Address</label><br />
                    <input 
                        type="email" 
                        value={email} 
                        placeholder='johndoe@yahoo.com' 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="border-2 rounded-2xl p-2" 
                    /> <br />
                    
                    <label htmlFor="password">Password</label><br />
                    <input 
                        type="password" 
                        value={password} 
                        placeholder='********' 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="border-2 rounded-2xl p-2" 
                    /> <br />
                </div>
                
                <div className="flex justify-center mt-10">
                    {/* 7. Disable the button and change text if loading is true */}
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="text-xl bg-slate-900 text-white p-3 rounded-2xl hover:opacity-80 disabled:opacity-50"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </div>
            </form>
        </div>
    )
}