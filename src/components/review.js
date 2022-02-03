import React, { useState, useRef, useEffect } from 'react'
import WebViewer from '@pdftron/webviewer'

import Nav from './nav'
export default function Review() {
  const viewerDiv = useRef<HTMLDivElement>(null)
  useEffect(()=>{
   
     WebViewer({path: 'lib', initialDoc: localStorage.getItem('resumeorcv@primecs')}, 
      viewerDiv.current as HTMLDivElement).then(instance => {})



  }, [])
    const DisabledCheck = ({value, caption}) => {
      return (
          <div>
              <div class="flex items-start items-center mb-4">
                  <input disabled type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" checked={value} />
                  <label class="text-sm ml-3 font-medium text-gray-900">{caption}</label>
         </div>
        </div>
        )
    }

      const TextWithLabel = ({labelText, value}) => {
    return (
      <div class="col-span-6 sm:col-span-3">
      <label for="last-name" class="block text-sm font-medium text-gray-700">{labelText}</label>
      <p type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          {value}
          </p>
    </div>
    )
  }
    return (
        <div className="w-full px-20 space-y-5">
            <Nav />
            <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="First Name" value={localStorage.getItem('firstName')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Last Name" value={localStorage.getItem('lasttName')}/>
             </div>
            </div>
            <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Email" value={localStorage.getItem('email')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Date Of Birth" value={localStorage.getItem('dateOfBirth')}/>
             </div>
            </div>

            <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Street Address" value={localStorage.getItem('streetAddress')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="City" value={localStorage.getItem('city')}/>
             </div>
            </div>


              <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="State/Province" value={localStorage.getItem('stateorprovince')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Phone Number" value={localStorage.getItem('phoneNbr')}/>
             </div>
            </div>

                <div className="flex w-full space-x-2">
           <div className="w-1/3">
           <DisabledCheck value={localStorage.getItem('architecture')} caption="Architecture"/>
               </div>
         <div className="w-1/3">
           <DisabledCheck value={localStorage.getItem('engineering')} caption="Engineering"/>
             </div>
             <div className="w-1/3">
           <DisabledCheck value={localStorage.getItem('construction')} caption="Construction"/>
             </div>
            </div>


                <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="High School Name" value={localStorage.getItem('highSchool')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Address" value={localStorage.getItem('highSchoolAddress')}/>
             </div>
            </div>
                <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Attended H/S From" value={localStorage.getItem('highSchoolFrom')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Finished H/S In" value={localStorage.getItem('highSchollTo')}/>
             </div>
            </div>
         <TextWithLabel  labelText="Graduated From HighSchool" value={localStorage.getItem('highFinish')}/>


            <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="University" value={localStorage.getItem('uniSchool')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="University Address" value={localStorage.getItem('uniSchoolAddress')}/>
             </div>
            </div>
               <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Attended University From" value={localStorage.getItem('uniSchoolFrom')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Finished University In" value={localStorage.getItem('uniSchoolTo')}/>
             </div>
            </div>

                 <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Available From" value={localStorage.getItem('availFrom')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Available To" value={localStorage.getItem('availTo')}/>
             </div>
            </div>
  <div className="flex w-full space-x-2">
              <div className="w-1/2">
           <TextWithLabel  labelText="Areas you Excell In" value={`${localStorage.getItem('areaexcell1')}, ${localStorage.getItem('areaexcell2')}, ${localStorage.getItem('areaexcell3')}`}/>
               </div>
         <div className="w-1/2">
           <TextWithLabel  labelText="Areas in which you need to improve" value={`${localStorage.getItem('areaimp1')}, ${localStorage.getItem('areaimp2')}, ${localStorage.getItem('areaimp3')}`}/>
             </div>
             </div>

                  <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Referal 1 Company Name" value={localStorage.getItem('r1cn')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Referal 1 Email" value={localStorage.getItem('r1em')}/>
             </div>
            </div>

                   <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Referal 1 Phone" value={localStorage.getItem('r1pn')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Referal 1 Relationship" value={localStorage.getItem('r1rs')}/>
             </div>
            </div>


         <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Referal 2 Company Name" value={localStorage.getItem('r2cn')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Referal 2 Email" value={localStorage.getItem('r2em')}/>
             </div>
            </div>

                   <div className="flex w-full space-x-2">
           <div className="w-1/2">
           <TextWithLabel  labelText="Referal 2 Phone" value={localStorage.getItem('r2pn')}/>
               </div>
         <div className="w-1/2">
         <TextWithLabel  labelText="Referal 2 Relationship" value={localStorage.getItem('r2rs')}/>
             </div>
            </div>

              <div className="flex w-full space-x-2">
           <div className="w-1/3">
           <TextWithLabel  labelText="Resume " value={localStorage.getItem('resumeorcv@primecs')}/>
          <div ref={viewerDiv}></div>
               </div>
         <div className="w-1/3">
         <TextWithLabel  labelText="Application Letter" value={localStorage.getItem('applicationletter@primecs')}/>
             </div>
             <div className="w-1/3">
         <TextWithLabel  labelText="Referal 2 Relationship" value={localStorage.getItem('paymentreceipt@primecs')}/>
             </div>
            </div>




        </div>
    )
}