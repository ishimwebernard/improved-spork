import React from 'react'
import AdNav from './adNav'
import Toggle from './Toggle'
import {Link} from 'react-router-dom'

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
                                <Link to="/admindashboard/appreview" class="text-blue-600 hover:text-blue-900">Review</Link>
                            </td>
                            </tr>
     
    )
}
export default function Applications() {
    return (
        <div>
            <div className="h-screen grid grid-cols-4">
            <div className="col-span-1 h-full blue-gradient">
              <AdNav />
            </div>

            <div className="col-span-3 bg-gray-50 h-screen overflow-y-croll overflow-x-hidden">
                <div className="p-6 bg-white">
                <p className="font-bold text-4xl text-gray-600">Active Applications</p>
                <Toggle caption="Show Admitted Applicants" id="admission" />
                </div>
                

   <div className="p-10">
   <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden sm:rounded-lg shadow-md">
                <table class="min-w-full">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Full Name
                            </th>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Email
                            </th>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Areas Of Interest
                            </th>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Date Applied
                            </th>
                         
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                         <TableRecord fName="Murara Prince" email="mura@ymail.com" aoi="Eng, Cons," dateAppl="1/1/2001"  />
                         <TableRecord fName="Murara Prince" email="mura@ymail.com" aoi="Eng, Cons," dateAppl="1/1/2001"  />
                       
                    </tbody>
                </table>
            </div>
        </div>
    </div>
   </div>


            </div>
        </div>
        </div>
    )
}
