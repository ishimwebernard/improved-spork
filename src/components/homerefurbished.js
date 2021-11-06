import React from 'react'
import Silhouette from '../../src/assets/fore.png'
import Button from './button'
import Nav from './nav'
import Architecture from '../assets/architecture.png'
import Engineering from '../assets/engineering.png'
import Construction from '../assets/constructiono.png'
import Leadership from '../assets/leadership.png'
import OnSite from '../assets/onsitu.png'
import Online from '../assets/online.png'
import Demand from '../assets/demand.png'
import Custom from '../assets/custom.png'
import Footer from './footer'


export default function HomeRefurbished() {
    return (
        <div>

<Nav />
            {/* Fore Stuff DESKTOP*/}
            <div className="w-full h-screen bg-gray-50 space-x-4  grid grid-cols-2 justify-center px-20  overflow-hidden">
                
                <div className="m-auto">
                    <p className="font-montserrat leading-snug text-6xl">Prime Education is here!</p>
                    <div className="mt-10"></div>
                    <p className="font-open-regular text-xl">
                    We help you unleash the necessary skillset vital for a problem solver, via real life practices of analysis and design of some of the complex structures in the industry.
                    </p>
                    <div className="mt-10"></div>
                    <div className=" mx-auto w-full justify-center space-x-4 grid grid-cols-2">
                        <Button text="LEARN MORE"/>
                        <Button text="EXPLORE COURSES"/>
                    </div>
                </div>
                <img src={Silhouette} alt="construction" className="py-auto m-auto w-full" />
            </div>







            {/* Reasons Desktop */}
            <div className="w-full h-screen px-20 ">
            <div className="mt-10"></div>
                    <p className="font-open-bold leading-snug text-6xl">Why Primecs?</p>
         <div className="flex h-full space-x-10">
                        <section className="mt-10 justify-center bg-white h-1/2 border border-gray-200 rounded-xl p-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 m-auto opacity-70" fill="none" viewBox="0 0 24 24" stroke="#1E40AF">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
</svg>
<div className="mt-5"></div>
<p className="justify-center font-open-bold text-blue-800 text-center text-2xl">Affordability</p>
<div className="mt-5"></div>
<p>
With us, your time bound and geographical  restrictions are no longer a limit! Our learning services are cheap and affordable regardless of where you are in the world. 
</p>
                        </section>
                        <section className="mt-10 justify-center bg-white h-1/2 border border-gray-200 rounded-xl p-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" m-auto opacity-70h-12 w-12 opacity-70" fill="none" viewBox="0 0 24 24" stroke="#1E40AF">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
</svg>
<div className="mt-5"></div>
<p className="justify-center font-open-bold text-blue-800 text-center text-2xl">Proffessionalism</p>
<div className="mt-5"></div>
<p>
It’s always amazing to learn with Experts! PrimECS got your back thanks to various professional individuals with superb field and office experiences in the industry.</p>
                        </section>
                        <section className="mt-10 justify-center bg-white h-1/2 border border-gray-200 rounded-xl p-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-70 m-auto" fill="none" viewBox="0 0 24 24" stroke="#1E40AF">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
</svg>
<div className="mt-5"></div>
<p className="justify-center font-open-bold text-blue-800 text-center text-2xl">Foresight</p>
<div className="mt-5"></div>
<p>
With us, you’re able to reflect on a long-term basis, dig deep in the sea of ideas, and hence get to plan actively and accurately.</p>
                        </section>
                     
         </div>
            </div>



            {/* Explore Programs */}

            <section className="bg-white px-20">
            <div className="py-10"></div>

            <p className="font-open-bold leading-snug text-6xl">Programs by Discipline</p>
            <div className="mt-10"></div>
           <div  className="flex space-x-4">

<div class="bg-white shadow-md border border-gray-200 rounded-lg h-full">
    
    <img class="rounded-t-lg" src={Architecture} alt="" />

<div class="p-5   h-full">
  
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 font-open-bold">Architecture</h5>

    <p class="font-normal text-gray-700 mb-3 font-open-regular h-full">Artistry, design & drawings</p>
    <Button text="LEARN MORE" />
</div>
</div>
<div class="h-full bg-white shadow-md border border-gray-200 rounded-lg max-w-sm ">
    
    <img class="rounded-t-lg" src={Engineering} alt="" />

<div class="p-5">
  
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 font-open-bold">Engineering</h5>

    <p class="font-normal text-gray-700 mb-3 font-open-regular">Technical Analysis & Design.</p>
    <Button text="LEARN MORE" />
</div>
</div>
           <div class="h-full bg-white shadow-md border border-gray-200 rounded-lg max-w-sm ">
    
            <img class="rounded-t-lg" src={Construction} alt="" />
      
        <div class="p-5">
          
                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 font-open-bold">Construction</h5>
        
            <p class="font-normal text-gray-700 mb-3 font-open-regular">Planning, Execution & Monitoring. </p>
            <Button text="LEARN MORE" />
        </div>
    </div>

    <div class="h-full bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
    
    <img class="rounded-t-lg" src={Leadership} alt="" />

<div class="p-5">
  
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 font-open-bold">Leadership</h5>

    <p class="font-normal text-gray-700 mb-3 font-open-regular">Influencing the outcome

</p>
    <Button text="LEARN MORE" />
</div>
</div>
      </div>
      <div className="py-10"></div>

<p className="font-open-bold leading-snug text-6xl">Programs by Delivery Mode</p>
<div className="mt-10"></div>
<div  className="flex space-x-4">
<div class="h-full bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
    
    <img class="rounded-t-lg" src={OnSite} alt="" />

<div class="p-5">
  
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 font-open-bold">Live On Site</h5>

    <p class="font-normal text-gray-700 mb-3 font-open-regular">In person attendance events



</p>
    <Button text="LEARN MORE" />
</div>
</div>
<div class="h-full bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
    
    <img class="rounded-t-lg" src={Online} alt="" />

<div class="p-5">
  
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 font-open-bold">Live Online</h5>

    <p class="font-normal text-gray-700 mb-3 font-open-regular">Courses by Video conference



</p>
    <Button text="LEARN MORE" />
</div>
</div>
<div class="h-full bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
    
    <img class="rounded-t-lg" src={Demand} alt="" />

<div class="p-5">
  
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 font-open-bold">On-Demand</h5>

    <p class="font-normal text-gray-700 mb-3 font-open-regular">Access to recorded courses



</p>
    <Button text="LEARN MORE" />
</div>
</div>
<div class="h-full bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
    
    <img class="rounded-t-lg" src={Custom} alt="" />

<div class="p-5">
  
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 font-open-bold">Custom</h5>

    <p class="font-normal text-gray-700 mb-3 font-open-regular">Custom, one-on-one and hybrid



</p>
    <Button text="LEARN MORE" />
</div>
</div>
</div>

<div className="pb-20">
<div className="py-10"></div>

<p className="font-open-bold leading-snug text-6xl">Programs by Delivery Mode</p>
<div className="mt-10"></div>
<div className="grid grid-cols-4 space-x-4">
<div class="h-full bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">  
<div class="p-5">
  
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 font-open-bold">AEC360 Pro
</h5>

    <p class="font-normal text-gray-700 mb-3 font-open-regular">Students & Entry Professionals





</p>
    <div className="mt-10">
    <Button text="LEARN MORE" />
    </div>
</div>
</div>
<div class="h-full bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">  
<div class="p-5">
  
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 font-open-bold">AEC360 Exec
</h5>

    <p class="font-normal text-gray-700 mb-3 font-open-regular">Senior Managers & Executives







</p>
    <div className="mt-10">
    <Button text="LEARN MORE" />
    </div>
</div>
</div>
<div class="h-full bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">  
<div class="p-5">
  
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 font-open-bold">AEC360 Custom
</h5>

    <p class="font-normal text-gray-700 mb-3 font-open-regular">Mid Level Managers & Rising Stars







</p>
    <Button text="LEARN MORE" />
</div>
</div>
<div class="h-full bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">  
<div class="p-5">
  
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 font-open-bold">AEC360 Custom

</h5>

    <p class="font-normal text-gray-700 mb-3 font-open-regular">Custom Corporate and individual Programs







</p>
    <Button text="LEARN MORE" />
</div>
</div>
</div>


</div>


            </section>
            <Footer />
        </div>
    )
}
