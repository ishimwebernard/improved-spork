import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { gsap } from "gsap";
import Nav from './nav';
import Applc from './applc';

const InputText = ({label, placeholder}) => {
    return (
        <div class=" font-poppins-regular">
    <label for="base-input" className="text-sm text-gray-900 block">{label}</label>
    <input type="text" id="base-input" className="bg-white text-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
</div>
    )
}
const spacingSmall = 5;

export default function MemberShip() {
    const el = useRef();
    const q = gsap.utils.selector(el);
    const tl = useRef();

    useEffect(() => {
        tl.current = gsap.timeline()
        .to(q('.section'), {
            y: -100
        })
    }, [])

    const [visibleTab, setVisibleTab] = useState(0);
    console.log(visibleTab ===0 )

    const cardRef = useRef();


function Next() {
    if( visibleTab < 3){
        setVisibleTab(visibleTab + 1);
    }
    console.log('Next'+visibleTab)
}
function Back() {
    if( visibleTab > 0){
        setVisibleTab(visibleTab - 1);
    }
    console.log('Back' + visibleTab)
}
    return (
       <div className="w-screen h-screen ">
           <Nav />
           <Applc />
            {/* <div className="w-full h-3/4 flex px-20">
            
            <div className="w-1/2 justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-1/3 w-max m-auto" fill="none" viewBox="0 0 24 24" stroke="#9CA3AF">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
<div className="mt-10"></div>

<p className="deep-text font-open-bold text-center w-full text-3xl leading-tight text-blue-800">Applicant's Information</p>
<div className="mt-5"></div>
<p className="font-open-regular text-gray-500 text-sm">
As we live by learning, In order to be a member of the program, please fill up the application form below. The outcomes will be notified to you upon the evaluation! We would appreciate to have you as part of the knot!
</p>
<div className={"mt-"+spacingSmall}></div>

<div className="justify-center items-center flex flex-row space-x-4 ">
<button onClick={()=>{
    Back();
}} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
<svg xmlns="http://www.w3.org/2000/svg" class="mr-1 ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>Back</button>
<button onClick={()=>{
    Next();
}} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
      Next
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg></button>

</div>

            </div>
            <div className="relative justify-center font-open-regular p-10 w-full" ref={el}>
                <section className={ visibleTab === 0 ? "absolute top-0 w-full h-full py-10 z-0 block":"absolute top-0 w-full h-full py-10 z-0 hidden"}>
                    
               <div className="w-full grid grid-cols-2 space-x-5">
               <InputText label="First Name" />
               <InputText label="Last Name" />
               </div>
               <div className={"mt-"+spacingSmall}></div>

               <div className="w-full grid grid-cols-2 space-x-5">
               <InputText label="Cell" />
               <InputText label="Sector" />
               </div>
               <div className={"mt-"+spacingSmall}></div>

               <div className="w-full grid grid-cols-2 space-x-5">
               <InputText label="City/District" />
               <InputText label="Province" />
               </div>
               <div className={"mt-"+spacingSmall}></div>

               <div className="w-full grid grid-cols-2 space-x-5">
               <InputText label="Phone Number" />
               <InputText label="Email Address" placeholder="" />
               </div>
               <div className={"mt-"+spacingSmall}></div>

               <div className="w-full grid grid-cols-2 space-x-5">
               <InputText label="Identification Number" />
               <InputText label="Citizenship" placeholder="" />
               </div>
               <div className={"mt-"+spacingSmall}></div>

         

                </section>
                <div className={visibleTab === 1 ? "absolute top-0 w-full h-full py-10 z-0 block":"absolute top-0 w-full h-full py-10 z-0 hidden"}>
                <div className="font-poppins-regular flex space-x-4">
                   <p className="text-sm text-gray-900 block">Area of interest</p>
               <div class="flex items-start items-center mb-4">
      <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" className="bg-white border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
      <label for="checkbox-2" class="text-sm ml-3 font-medium text-gray-900">Architecture</label>
  </div>
  <div class="flex items-start items-center mb-4">
      <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" />
      <label for="checkbox-2" class="text-sm ml-3 font-medium text-gray-900">Engineering</label>
  </div>
  <div class="flex items-start items-center mb-4">
      <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" />
      <label for="checkbox-2" class="text-sm ml-3 font-medium text-gray-900">Construction</label>
  </div>
               </div>
               <div class="font-poppins-regular ">
    <label for="base-input" class="text-sm font-medium text-gray-900 block mb-2">If other, please explain</label>
    <input type="text" id="base-input" class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
</div> 
               <div className="w-full grid grid-cols-2 space-x-5">
               <InputText label="Highschool" />
               <InputText label="School Address" />
               </div>
               <div className={"mt-"+spacingSmall}></div>

               <div className="w-full grid grid-cols-2 space-x-5">
               <fieldset className="font-poppins-regular flex space-x-4">
  <p className="">Did you graduate?</p>

  <div class="flex items-center ">
    <input id="country-option-1" type="radio" name="countries" value="USA" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" checked />
    <label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
      Yes
    </label>
  </div>

  <div class="flex items-center">
    <input id="country-option-2" type="radio" name="countries" value="Germany" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2" />
    <label for="country-option-2" class="text-sm font-medium text-gray-900 ml-2 block">
      No
    </label>
  </div>
  </fieldset>
               </div>
               <div className={"mt-"+spacingSmall}></div>

               <div className="w-full grid grid-cols-2 space-x-5">
               <InputText label="University" />
               <InputText label="University Address" />
               </div>
               <div className={"mt-"+spacingSmall}></div>

               
               <div className={"mt-"+spacingSmall}></div>

               <fieldset className="font-poppins-regular flex space-x-4">
  <p className="">Did you graduate?</p>

  <div class="flex items-center ">
    <input id="country-option-1" type="radio" name="countries" value="USA" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-1" aria-describedby="country-option-1" checked />
    <label for="country-option-1" class="text-sm font-medium text-gray-900 ml-2 block">
      Yes
    </label>
  </div>

  <div class="flex items-center">
    <input id="country-option-2" type="radio" name="countries" value="Germany" class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300" aria-labelledby="country-option-2" aria-describedby="country-option-2" />
    <label for="country-option-2" class="text-sm font-medium text-gray-900 ml-2 block">
      No
    </label>
  </div>
  </fieldset>
     

                </div>

                <div className={visibleTab === 2 ? "absolute top-0 w-full h-full py-10 z-0 block":"absolute top-0 w-full h-full py-10 z-0 hidden"}>
                <div className="w-full grid grid-cols-2 space-x-5">
               <InputText label="From" />
               <InputText label="To" />
               </div>
                </div>
                <div className={visibleTab === 3 ? "absolute top-0 w-full h-full py-10 z-0 block":"absolute top-0 w-full h-full py-10 z-0 hidden"}>
               <InputText label="Area 1" />
               <div className={"mt-"+spacingSmall}></div>

               <InputText label="Area 2" />
               <div className={"mt-"+spacingSmall}></div>

               <InputText label="Area 3" />
               <div className={"mt-"+spacingSmall}></div>
               <div className={"mt-"+spacingSmall}></div>

               <InputText label="Area 1" />
               <div className={"mt-"+spacingSmall}></div>

               <InputText label="Area 2" />
               <div className={"mt-"+spacingSmall}></div>

               <InputText label="Area 3" />
               
                </div>
                <div className={visibleTab === 4 ? "absolute top-0 w-full h-full py-10 z-0 block":"absolute top-0 w-full h-full py-10 z-0 hidden"}>

                    </div>

            </div>
           
        </div> */}
       </div>
    )
}
