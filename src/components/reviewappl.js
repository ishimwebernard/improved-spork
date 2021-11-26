import React from 'react'
import AdNav from './adNav'
import Toggle from './Toggle'
const TableRecord = ({fName, email, aoi, dateAppl}) => {
    return (
             <tr class="bg-white border-b">

               <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {fName}
                            </td>
                            <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                {email}
                            </td>
                            <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                {aoi}
                            </td>
                            <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                {dateAppl}
                            </td>
                         
                            <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                                <a href="#" class="text-blue-600 hover:text-blue-900">Review</a>
                            </td>
                            </tr>
     
    )
}
export default function ReviewApplication() {
    return (
        <div>
            <div className="h-screen grid grid-cols-4">
            <div className="col-span-1 h-full blue-gradient">
              <AdNav />
            </div>

            <div className="col-span-3 bg-gray-50 h-screen overflow-y-croll overflow-x-hidden">
                <div className="p-6 bg-white">
                <p className="font-bold text-4xl text-gray-600">MURARA Aime Prince</p>
                <small>Application Review for admission</small>
                </div>
                

   <div className="p-10">
  
   </div>


            </div>
        </div>
        </div>
    )
}
