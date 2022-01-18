import React, { useState } from 'react'
import Nav from './nav'
export default function Review() {
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
        </div>
    )
}