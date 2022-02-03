import React, { useState, useEffect } from 'react'
import AdNav from './adNav'
import Toggle from './Toggle'
import {Link} from 'react-router-dom'
import axios from 'axios'
const TableFreshItem = () => {
    return ( <tr class="bg-white border-b">

    <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                 <input  type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    
                 </td>
                 <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                 <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    
                 </td>
                 <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                 <input  type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    
                 </td>
                 <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                 <input  type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    
                 </td>
                 <td class="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                 <input 
                  type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    
                 </td>
                 </tr>)
}

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
    const [schedules, setSchedules] = useState([])
   const [forefrontSchedule, setForefrontSchedule] = useState([])
   let [scheduleOpen, setScheduleOpen] = useState(false)
   let [participantsOpen, setParticipantsOpen] = useState(false)

    useEffect(()=>{
        async function fetchSchedules(){
            const schedules = await axios({
                method: 'GET',
                url: 'https://rich-guy-rambo.herokuapp.com/schedules/all',
                
            });

            setSchedules(schedules)
            return schedules

        }

        fetchSchedules();

    }, []);

    let scheduleElement = [];
    let scheduleRows = [];
   try{
    schedules.data.map((schedule)=>{
        const pp = [];
        schedule.participants.map((participant)=>{
            pp.push(
                <small className='bg-gray-200 px-1 rounded-lg'>{participant}</small>
            )
        });
        scheduleElement.push(
            <div className="rounded-xl bg-white border border-gray-100 px-2 py-4 cursor-pointer flex" >
              <div>
              <p className="font-semibold text-2xl ">{schedule.scheduleName}</p>
                <p className='flex space-x-2'>BENEFICIARIES: {pp}</p>
              </div>
              <div className="grid place-items-center">
              <div>
              <button onClick={()=>{
                const participantsString = schedule.participants.join();
                localStorage.setItem('schedule', JSON.stringify(schedule))
                window.open('/admindashboard/openschedule')
                setForefrontSchedule(schedule.times)
                 console.log(schedule)
                setScheduleOpen(true)
            }} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3">View</button>

              </div>
              </div>
            </div>
        )
        forefrontSchedule.map((sce)=>{
            scheduleRows.push(
                <div className="relative grid grid-cols-6">
                     <p  class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                {sce.date}
                            </p>
                            <p  class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                            {sce.timebegin}
                            </p>
                            <p  class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                            {sce.subject}
                            </p>
                            <p  class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                            {sce.coursePart}
                            </p>
                         
                            <p  class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                            {sce.instructor}
                            </p>
                            <p  class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                            {sce.instructor}
                            </p>
                </div>
            )
        })
        
    })
   }catch(e){

   }

    return (
        <div>
            <div className={participantsOpen ? 'h-screen w-screen absolute bg-opacity-60 bg-gray-600 grid place-items-center':'hidden'}>
            <div className="relative bg-white h-3/4 w-1/3">
            <input placeholder='Schedule Name' />
            <div>
                <input />
                <input />
                <input />
            </div>
            </div>
            </div>
            <div className={scheduleOpen ? 'h-screen w-screen absolute bg-opacity-60 bg-gray-600 grid place-items-center':'hidden'}>
            
            <div className="relative bg-white h-3/4 w-3/4">

            
             <div class="bg-gray-50 w-full grid grid-cols-6">
                       
                          
             <p  class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Date
                            </p>
                            <p  class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Time Begin and End
                            </p>
                            <p  class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Subject
                            </p>
                            <p  class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Course Part
                            </p>
                         
                            <p  class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Instructor
                            </p>
                            <p  class="text-xs font-medium text-gray-700 px-6 py-3 text-left uppercase tracking-wider">
                                Beneficiaries
                            </p>
                      
                       
                    </div>
                    <div className=''>
            {scheduleRows}
                    </div>
                    <div className='absolute bottom-0 bg-gray-100  place-items-center w-full py-2 grid grid'>
                       <div>
                       <button onClick={()=>{
                setScheduleOpen(false)
            }} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3">Close</button>

                           </div>
                    </div>
            </div>
            </div>
            
            <div className="h-screen grid grid-cols-4">
            <div className="col-span-1 h-full blue-gradient">
              <AdNav />
            </div>

            <div className="col-span-3 bg-gray-50 h-screen overflow-y-croll overflow-x-hidden">
                <div className="p-6 bg-white">
                <p className="font-bold text-4xl text-gray-600">Schedules</p>
            <button onClick={()=>{
                setParticipantsOpen(true)
            }}  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3">New Schedule</button>
                </div>
                

   <div className="p-10">
   <div  class="overflow-x-auto sm:-mx-6 lg:-mx-8">
   {scheduleElement}
    </div>
   </div>


            </div>
        </div>
        </div>
    )
}
