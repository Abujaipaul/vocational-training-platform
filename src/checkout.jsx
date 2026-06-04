import {useState} from 'react'
import { usePlatformStore } from './platformstore'
import {usePaystackPayment} from 'react-paystack'

export default function CheckOut(){
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [number, setNumber] = useState("")
   const {selectedCourse} = usePlatformStore()

     const config = {
    reference: (new Date()).getTime().toString(),
    email: email, // This will match the useState variable for the email input
    amount: selectedCourse.price * 100, // The Kobo rule!
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    };

     function onSuccess (reference) {
     console.log("Transaction Successful! Reference:", reference);
      
      // We will handle clearing the form and showing a success message here later
       };

     function onClose () {
     console.log("User closed the payment gateway.");
    };  

 const initializePayment = usePaystackPayment(config);
     
  function handleSubmit(e) {
    e.preventDefault(); 
    // Safety Check: Don't open Paystack if the email is empty
    if (!email || !name || !number) {
        alert("Please fill in all details before paying.");
        return;
    }
    // Trigger the Paystack modal and pass in your callbacks
       initializePayment({ onSuccess, onClose });
        setName("");
        setEmail("");
        setNumber("");
    }
    return(
        <>
          <div className="max-w-2xl mx-auto shadow-lg my-20 rounded-2xl p-15 pb-10 text-lg">
              {selectedCourse && (
                <div className="mb-6 p-4 bg-slate-100 rounded-xl">
                <h2 className="text-xl font-bold">{selectedCourse.title}</h2>
                <p className="text-slate-600">Price: ₦{selectedCourse.price}</p>
                </div>
              )}
            <form onSubmit={(e) => handleSubmit(e)}>
                 <div className="flex flex-col ">
                    <label htmlFor="name" >Full Name  </label><br />
                <input type="text" value={name} placeholder='john doe' onChange={(e) => setName(e.target.value)} className="border-2 rounded-2xl p-2" /> <br />
                <label htmlFor="email">Email Address </label><br />
                <input type="email" value={email} placeholder='johndoe@yahoo.com' onChange={(e) => setEmail(e.target.value)} className="border-2 rounded-2xl p-2" /> <br />
                <label htmlFor="tel">Phone Number </label><br />
                <input type="tel" value={number} placeholder='08137395564' onChange={(e) => setNumber(e.target.value)} className="border-2 rounded-2xl p-2"  /> <br />
                 </div>
                
                  <div className="flex justify-center mt-10">
                    <button type="submit" className="text-xl bg-slate-900 text-white p-3 rounded-2xl hover:opacity-80">
                        Proceed to Payment
                        </button>
                  </div>
                
            </form>
          </div>
        </>
    )
}