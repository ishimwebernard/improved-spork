import React from 'react'
import Button from './button'
import Nav from './nav'
import Footer from './footer'
const Card = ({title, description, priceOnDemand, priceOnLine, inclusion}) =>{
    const Elements = [];
    inclusion.forEach((include)=>{
        Elements.push(
            <div className="flex space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
</svg>
                <p>{include}</p>
            </div>

        )
    })

    return (
        <div className="p-5 border border-gray-300 font-open-regular rounded-xl">
            <p className="font-open-bold text-xl">{title}</p> 
            <div className="mt-5"></div>
            <p className="font-open-bold text-4xl tracking-tighter text-center">${priceOnDemand} <span className="font-open-regular tracking-normal">Online</span></p>
            <div className="mt-5"></div>
            <p className="font-open-bold text-4xl tracking-tighter text-center">${priceOnLine}<span className="font-open-regular tracking-normal">On Demand</span></p>
            <div className="mt-5"></div>
            <Button text="Buy Full Course" />
            <div className="mt-5"></div>
            <Button text="Buy Custom Course" />
            <div className="mt-10 "></div>
            <p className="font-open-bold">WHAT'S INCLUDED</p>
            <div className="mt-5"></div>
            {Elements}
        </div> 
    );
}

export default function Pricing() {
  
    return (
        <div>
            
            <div className="h-screen w-full">
            <Nav />
            <div className=" h-3/4 px-20 justify-center elements-center w-full relative">
                <div className="h-1/3"></div>
                   <div className="  w-full">
                   <p className="text-center font-open-bold text-6xl tracking-tight">Buy Once, Learn Everywhere</p>
                   <div className="mt-10"></div>
                   <p className="m-auto text-center text-lg tracking-normal">Get Unlimited access to courses at a low price and very customisable</p>
                   </div>
                    
                </div>
                <div className=" absolute bg-gray-50">
        <div className="space-x-4 grid grid-cols-4 px-20 py-10">
        <Card title="Leadership and Management" description="ndavre" priceOnLine="2,250.00" priceOnDemand="1,800.00" inclusion={["Owning and Operating a large AEC business", "Investing, Financing and Financial Management", "Risk Assesment and Manangement", "Pursuit, Procurement and Estimating","Understanding and Managing Large Contracts"]}/>
            <Card title="Leadership and Management" description="ndavre" priceOnLine="2,250.00" priceOnDemand="1,800.00" inclusion={["Owning and Operating a large AEC business", "Investing, Financing and Financial Management", "Risk Assesment and Manangement", "Pursuit, Procurement and Estimating","Understanding and Managing Large Contracts"]}/>
            <Card title="Leadership and Management" description="ndavre" priceOnLine="2,250.00" priceOnDemand="1,800.00" inclusion={["Owning and Operating a large AEC business", "Investing, Financing and Financial Management", "Risk Assesment and Manangement", "Pursuit, Procurement and Estimating","Understanding and Managing Large Contracts"]}/>
            <Card title="Leadership and Management" description="ndavre" priceOnLine="2,250.00" priceOnDemand="1,800.00" inclusion={["Owning and Operating a large AEC business", "Investing, Financing and Financial Management", "Risk Assesment and Manangement", "Pursuit, Procurement and Estimating","Understanding and Managing Large Contracts"]}/>

        </div>

            <Footer />

            </div>
            </div>
           
    
            </div>
    )
}
