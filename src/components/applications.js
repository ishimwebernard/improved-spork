import React, { useEffect, useState} from 'react'
import axios from 'axios'
import AdNav from './adNav'
import Toggle from './Toggle'
import {Link} from 'react-router-dom'
import dotenv from 'dotenv'
dotenv.config()
const TableRecord = ({fName, email, aoi, dateAppl}) => {
    return (
         
             <tr className="bg-white border-b w-full">

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
           
          
             </tr>
           
     
    )
}
export default function Applications() {
 
  

    const WrapApplicantGraphics = () => {
        const [data, setWaitingForAdmission] = useState([])

        useEffect(()=>{
            const fetchData = async() =>{
                const applicants = await axios({
                    'method': 'get',
                    'url': 'https://rich-guy-rambo.herokuapp.com/applicants/forAdmission',
        
                })
                setWaitingForAdmission(applicants.data)
                //console.log(data)
                return applicants
            }
            fetchData()
            //alert('Finished')
        })
    let retval = [];
      try{
         console.log(data.length)
         for(let i=0; i<data.length;i++){
            retval.push(
                <TableRecord fName={data[i].firstName} email={data[i].user_Email} aoi="Eng, Cons," dateAppl={data[i].dateSent}  />
    
            )
          }
    
      }catch(e){
            console.log(e)
      }

    
   return (
       <>
           {retval}
       </>
   )
   }
    

    
    return (
        <div>
            <div className="h-screen grid grid-cols-4">
            <div className="col-span-1 h-full blue-gradient">
              <AdNav />
            </div>

            <div className="col-span-3 bg-gray-50 h-screen overflow-y-croll overflow-x-hidden">
                <div className="p-6 bg-white">
                <p className="font-bold text-4xl text-gray-600">Active Applications</p>
                </div>
                

   <div className="p-10">
   <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden sm:rounded-lg shadow-md">
                <table class="min-w-full ">
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
                         
                        </tr>
                    </thead>
                    <tbody>

<WrapApplicantGraphics />
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
