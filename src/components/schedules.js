import React, { useState } from 'react'
import AdNav from './adNav'
import Toggle from './Toggle'
import {Link} from 'react-router-dom'
const tableFreshItem = ( <tr class="bg-white border-b">

<td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
             <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>

             </td>
             <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
             <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>

             </td>
             <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
             <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>

             </td>
             <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
             <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>

             </td>
          
             <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                 <Link to="/admindashboard/appreview" class="text-blue-600 hover:text-blue-900">Review</Link>
             </td>
             </tr>)

const ScheduleTable = ({addItem, displayItems}) => {

    

    return (
       <div>
           <div>
               <button onClick={()=>{
                   addItem()
               }} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3">
                Add Schedule row
               </button>
           </div>
            <table>
                <div>

                </div>
             <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Date
                            </th>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Time Begin and End
                            </th>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Subject
                            </th>
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Course Part
                            </th>
                         
                            <th scope="col" class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Instructor
                            </th>
                        </tr>
                        {
                            displayItems
                        }
                    </thead>
        </table>
       </div>
            
     
    )
}
export default function Schedules() {
    var [TableItems, setTableItems] = useState([tableFreshItem,tableFreshItem]);
   // TableItems.push(tableFreshItem)
    var addThisItem = () => {
        alert(TableItems.length)
        // const temp = TableItems;
        // temp.push(tableFreshItem)
        // setTableItems(temp)
        TableItems.push({...tableFreshItem})
        setTableItems(TableItems)
    }
    return (
        <div>
            <div className="h-screen grid grid-cols-4">
            <div className="col-span-1 h-full blue-gradient">
              <AdNav />
            </div>

            <div className="col-span-3 bg-gray-50 h-screen overflow-y-croll overflow-x-hidden">
                <div className="p-6 bg-white">
                <p className="font-bold text-4xl text-gray-600">Schedules</p>
                <Toggle caption="Show Admitted Applicants" id="admission" />
                </div>
                

   <div className="p-10">
   <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <ScheduleTable addItem={()=>{
            addThisItem()
            console.log(this)
      }} displayItems={TableItems} />
    </div>
   </div>


            </div>
        </div>
        </div>
    )
}
