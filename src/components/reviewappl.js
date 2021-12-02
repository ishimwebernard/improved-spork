import React from 'react'
import AdNav from './adNav'
import Toggle from './Toggle'
import Modal from './modal'
const UserInfo = ({caption, value}) => {
    return (
           <div className="grid grid-cols-2 bg-white hover:bg-gray-100  px-4 py-2">
               <p className="font-semibold">{caption}</p>
               <p className="text-gray-600">{value}</p>
           </div>
                            
     
    )
}

export default function ReviewApplication() {
    return (
        <div>
            <div className="relative h-screen grid grid-cols-4">
              
            <div className="col-span-1 h-full blue-gradient">
              <AdNav />
            </div>

            <div className="col-span-3 bg-gray-50 h-screen overflow-y-croll overflow-x-hidden">
                <div className="p-6 bg-white grid grid-cols-2">
                <div>
                <p className="font-bold text-4xl text-gray-600">MURARA Aime Prince</p>
                <small>Application Review for admission</small>
                </div>
                <div>
                <button onClick={()=>{
                    
                }} data-modal-toggle="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg>    Admit
  </button>
  <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
</svg>    Reject
  </button>
                </div>
                </div>
                

   <div className="p-10 rounded-lg bg-gray-50">
        <UserInfo caption="First Name" value="MURARA Aime" />
        <UserInfo caption="Last Name" value="Lionel" />
        <UserInfo caption="Email" value="murara@gmail.com" />
        <UserInfo caption="Country" value="Zimbabwe" />
        <UserInfo caption="Date Of Birth" value="1/1/2001" />
        <UserInfo caption="Street Address" value="MURARA Aime" />
        <UserInfo caption="City" value="KIGALI" />
        <UserInfo caption="State" value="Nyarugenge" />
        <UserInfo caption="Phone Number" value="0851561561" />
        <UserInfo caption="Areas of Interest" value="Architecture, Construction" />
        <UserInfo caption="High School Name" value="ESC BYIMANA" />
        <UserInfo caption="High School Address" value="Ruhango" />
        <UserInfo caption="In High School From" value="1990" />
        <UserInfo caption="In High School To" value="2005" />
        <UserInfo caption="Graduated Highschool" value="No" />
        <UserInfo caption="University Name" value="KIST" />
        <UserInfo caption="University Address" value="Ruhango" />
        <UserInfo caption="In University From" value="1990" />
        <UserInfo caption="In University To" value="2005" />
        <UserInfo caption="Graduated University" value="No" />
        <UserInfo caption="Available From" value="12:00 AM" />
        <UserInfo caption="Available To" value="2:00 PM" />
        <UserInfo caption="First Strong Area" value="Sociology" />
        <UserInfo caption="Second Strong Area" value="Karate" />
        <UserInfo caption="Third Strong Area" value="Kungfu" />
        <UserInfo caption="First Area to Improve" value="Sociology" />
        <UserInfo caption="Second Area to Improve" value="Karate" />
        <UserInfo caption="Third Area to Improve" value="Kungfu" />
        <UserInfo caption="Referal 1 Company Name" value="Alligator Studios" />
        <UserInfo caption="Referal 1 Email" value="akl@alligator.com" />
        <UserInfo caption="Referal 1 Relationship" value="Father" />
        <UserInfo caption="Referal 2 Company Name" value="KLM Airways" />
        <UserInfo caption="Referal 2 Email" value="klma@gmail.com" />
        <UserInfo caption="Referal 2 Relationship" value="GrandMa" />
        <p className="font-bold mt-10 text-lg">Files Uploaded</p>
        <ol>
            <li className="mt-3">Resume or CV <span className="blue-gradient font-bold px-4 py-2 rounded-lg text-white cursor-pointer">Open</span> </li>
            <li className="mt-6">Application Letter <span className="blue-gradient font-bold px-4 py-2 rounded-lg text-white cursor-pointer">Open</span> </li>
            <li className="mt-6">Payment Receipt<span className="blue-gradient font-bold px-4 py-2 rounded-lg text-white cursor-pointer">Open</span> </li>


        </ol>
   </div>


            </div>
        </div>
        </div>
    )
}
