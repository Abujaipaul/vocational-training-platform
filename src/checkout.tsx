import {useState, SyntheticEvent} from 'react'
import { usePlatformStore } from './platformstore'
import {usePaystackPayment} from 'react-paystack'
import { useNavigate } from 'react-router-dom'
import { supabase } from './supabaseClient';



export default function CheckOut(){
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [number, setNumber] = useState("")
   const [isPaid, setIsPaid] = useState(false)
   const {selectedCourse, setSelectedCourse} = usePlatformStore()

     const navigate = useNavigate()

     function generateAdmissionId (){
      return 'VA-' + Math.floor(Math.random() * 1000000); // Generates something like VA-482910
     };

     const config = {
      reference: (new Date()).getTime().toString(),
      email: email, // This will match the useState variable for the email input
      amount: (selectedCourse?.price || 0 ) * 100, // The Kobo rule!
      publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    };

     async function onSuccess (reference : any) {
     console.log("Transaction Successful! Reference:", reference);
       // Generate the unique ID
        const newAdmissionId = generateAdmissionId();
       //  Prepare the exact payload matching your Supabase columns
        const enrollmentData = { 
            email: email, 
            course_name: selectedCourse.title || "", 
            amount_paid: selectedCourse.price || 0,
            admission_id: newAdmissionId
        };
        //  Fire it into the database!
        const { data, error } = await supabase
            .from('enrollments')
            .insert([enrollmentData]);

        //  Handle the result
        if (error) {
            console.error("Database Error:", error);
            alert("Payment received, but database sync failed. Contact support.");
        } else {
            console.log("Enrollment Saved!", data);
            alert(`Payment Successful! Your Admission ID is ${newAdmissionId}. Check your email shortly.`);
        }
      
      // Handle clearing the form and showing a success message here later
         setIsPaid(true) 
           setName("");
        setEmail("");
        setNumber("");
        setSelectedCourse(null)
       };

     function onClose () {
     console.log("User closed the payment gateway.");
     alert("Wait! You need to complete your payment to get your admission ticket.")
    };  

 const initializePayment = usePaystackPayment(config);
     
  function handleSubmit(e : SyntheticEvent<HTMLFormElement>) {
    e.preventDefault(); 
    // Safety Check: Don't open Paystack if the email is empty
    if (!email || !name || !number) {
        alert("Please fill in all details before paying.");
        return;
    }
    // Trigger the Paystack modal and pass in your callbacks
       initializePayment({ onSuccess, onClose });
    }
    return(
      <>
           {isPaid ? (
              <div className="flex flex-col items-center justify-center text-center gap-5 my-32">
                  <h2 className="text-3xl font-bold text-emerald-600">Payment Successful!</h2>
                   <p>You now have full access to your course.</p>
                   {/* Put button here that navigates back to the home page ("/") */}
                    <button className='border-2 p-2 rounded-2xl bg-emerald-600 text-white hover:opacity-75' onClick={() => navigate('/')}>Go Home</button>
              </div>
           )
           : 
          (
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
          )
         }
        </>
    )
}