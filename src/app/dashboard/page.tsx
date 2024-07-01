"use client"

import Link from "fs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import 'material-symbols';
import { FormEventHandler, useState } from "react";

function dashboardPage(){

    // const router = useRouter();

    const data = [{name:'Unscheduled Power Interruption', date:"December 31,2023"},{name:"Test", date:"January 1, 2023"},{name:"Unscheduled Power Interruption 2", date:"January 2, 2023"}]

    return (

        // Whole Page
        <div className="flex flex-row w-screen h-screen bg-white">

            {/* Navigation Bar */}
            <div className="w-[260px] h-fit lg:h-full bg-green-100 px-[16px] py-[32px] flex flex-col justify-between">
                <img src="assets/mpulogo.png" alt="MORE PowerUp Logo"/>

                {/*========== Menu Container ==========*/}
                <div className="pt-[24px] space-y-[8px]">
                    
                    <div className="w-full flex flex-row gap-5 content-center justify-start">
                        
                        <button className=" text-white font-sans font-normal text-[12px] leading-[124%] tracking-[-3%] py-1 text-left flex items-center gap-2"> 
                        <span className="material-symbols-outlined">home</span> Dashboard</button>
                    </div>

                    <div className="w-full flex flex-row gap-5 content-center justify-start">
                        
                        <button className=" text-white font-sans font-normal text-[12px] leading-[124%] tracking-[-3%] py-1 text-left flex items-center gap-2"> 
                        <span className="material-symbols-outlined">credit_card</span> Transactions</button>
                    </div>

                    <div className="w-full flex flex-row gap-5 content-center justify-start">
                        
                        <button className=" text-white font-sans font-normal text-[12px] leading-[124%] tracking-[-3%] py-1 text-left flex items-center gap-2"> 
                        <span className="material-symbols-outlined">lightbulb</span> Outages</button>
                    </div>

                    <div className="w-full flex flex-row gap-5 content-center justify-start">
                        
                        <button className=" text-white font-sans font-normal text-[12px] leading-[124%] tracking-[-3%] py-1 text-left flex items-center gap-2"> 
                        <span className="material-symbols-outlined">campaign</span> Alerts</button>
                    </div>

                    <div className="w-full flex flex-row gap-5 content-center justify-start">
                        
                        <button className=" text-white font-sans font-normal text-[12px] leading-[124%] tracking-[-3%] py-1 text-left flex items-center gap-2"> 
                        <span className="material-symbols-outlined">manage_accounts</span> Update Account</button>
                    </div>

                    <div className="w-full flex flex-row gap-5 content-center justify-start">
                        
                        <button className=" text-white font-sans font-normal text-[12px] leading-[124%] tracking-[-3%] py-1 text-left flex items-center gap-2"> 
                        <span className="material-symbols-outlined">electrical_services</span> Services</button>
                    </div>

                    <div className="w-full flex flex-row gap-5 content-center justify-start">
                        
                        <button className=" text-white font-sans font-normal text-[12px] leading-[124%] tracking-[-3%] py-1 text-left flex items-center gap-2"> 
                        <span className="material-symbols-outlined">info</span> About MORE PowerUp</button>
                    </div>

                    <div className="w-full flex flex-row gap-5 content-center justify-start">
                        
                        <button className=" text-white font-sans font-normal text-[12px] leading-[124%] tracking-[-3%] py-1 text-left flex items-center gap-2"> 
                        <span className="material-symbols-outlined">shield_person</span> Privacy Policy</button>
                    </div>

                    <div className="w-full flex flex-row gap-5 content-center justify-start">
                        
                        <button className=" text-white font-sans font-normal text-[12px] leading-[124%] tracking-[-3%] py-1 text-left flex items-center gap-2"> 
                        <span className="material-symbols-outlined">gavel</span> Terms and Conditions</button>
                    </div>

                    <div className="w-full flex flex-row gap-5 content-center justify-start">
                        
                        <button className=" text-white font-sans font-normal text-[12px] leading-[124%] tracking-[-3%] py-1 text-left flex items-center gap-2"> 
                        <span className="material-symbols-outlined">call</span> Contact Us</button>
                    </div>

                </div>


                {/* ====== Bottom section of the menu container ======= */}
                <div className="w-full pt-6">
                    
                    {/* horizontal rule */}
                    <hr className="opacity-50"/>

                    {/* Account container */}
                    <div className="w-full h-[120px] bg-mustard-200 rounded-[8px] mt-4 shadow-sm p-2 space-y-2 relative flex flex-col justify-between">
                        
                        {/* top container */}
                        <div className="flex flex-row gap-4 items-center justify-center">
                            
                            {/* Avatar */}
                            <div className="bg-mustard-300 border-2 border-mustard-100 w-[40px] h-[40px] flex items-center justify-center rounded-[8px] p-2">
                                
                                <text className="font-bold text-[12px] font-sans text-center text-neutral-100">NM</text>

                            </div>

                            {/* Account details container */}
                            <div className="w-full">

                                <div className="w-full">
                                    <text className="font-bold text-[12px] font-sans text-center text-neutral-100"> Nong Moroy </text>
                                </div>

                                <div className="w-full">
                                    <text className="font-bold text-[10px] font-sans text-center text-neutral-400"> JARTAC42922231 </text>
                                </div>

                            </div>

                        </div>

                        <button className="text-neutral-100 leading-[124%] text-[12px] p-2 font-semibold bg-mustard-100 w-full rounded-lg py-2 bottom-0 shadow-md flex justify-center items-center"> <span className="material-symbols-outlined">person</span>My Account</button>

                    </div>
                    
                    <div>
                        <div className="w-full flex flex-row gap-5 content-center justify-start pt-2">
                            
                            <button className=" text-white font-sans font-normal text-[12px] leading-[124%] tracking-[-3%] py-2 text-left flex items-center gap-2"> 
                            <span className="material-symbols-outlined">loyalty</span> My Points</button>
                        </div>
                        
                        <div className="w-full flex flex-row gap-5 content-center justify-start">
                            
                            <button className=" text-white font-sans font-normal text-[12px] leading-[124%] tracking-[-3%] py-2 text-left flex items-center gap-2"> 
                            <span className="material-symbols-outlined">settings</span> Settings</button>
                        </div>

                        <div className="w-full flex flex-row gap-5 content-center justify-start">
                            
                            <button className=" text-white font-sans font-normal text-[12px] leading-[124%] tracking-[-3%] py-2 text-left flex items-center gap-2"> 
                            <span className="material-symbols-outlined">logout</span> Sign out</button>
                        </div>

                    </div>

                </div>


            </div>

            {/* ========Content Page ========== */}
            <div className="px-6 pt-12 pb-6 w-full flex flex-col space-y-[24px]">

                {/* Welcome message box */}
                <div className="h-[150px] bg-green-gradient w-full rounded-[8px] shadow-xl px-6 pl-6 pr-[80px] overflow-hidden relative flex flex-row justify-between items-center">
                    
                    {/* Background designs */}
                    <img src="assets/c1.png" alt="circle1" className="absolute bottom-[-120px] left-[-250px] -z-0"/>

                    <img src="assets/nm.png" alt="Nong Moroy" className="h-full z-10 absolute top-0"/>

                    <img src="assets/c2.png" alt="circle2" className="absolute top-[-140px] left-[250px]"/>

                    <img src="assets/c3.png" alt="circle3" className="absolute bottom-[-160px] right-[-250px]"/>

                    {/* Welcome Message */}
                    <div className="pl-[160px] py-4 flex flex-col gap-[16px]">

                        <div className="w-full">
                            <text className="font-medium text-[24px] w-full"> Hi, Nong Moroy</text>
                        </div>

                        <div className="w-full">
                            <text className="font-normal text-[16px] w-full"> Welcome to MORE PowerUp!</text>
                        </div>

                    </div>

                    {/* Points containter */}

                    <div className="px-6 py-4 bg-black bg-opacity-40 items-center rounded-lg flex h-fit">

                        <text className="text-white text-[18px] font-medium"> 0.00 pts</text>

                    </div>

                </div>

                {/* Billing section */}
                <div className="h-[210px] bg-white drop-shadow-xl rounded-lg py-6 px-12 flex flex-col gap-2 w-fit">

                    {/* Header */}
                    <div className="py-2 flex flex-row justify-between items-center">
                        <h1 className="text-neutral-100 text-[18px] font-semibold font-noto">Billing Information</h1>

                        <button className="text-neutral-100 leading-[124%] text-[12px] p-2 font-medium bg-mustard-100 flex items-center rounded-lg gap-2 py-2 px-[100px] bottom-0 shadow-md "> <span className="material-symbols-outlined">credit_card</span>Pay Bill </button>
                    </div>
                    
                    {/* Analytics */}
                    <div className="flex flex-row gap-9">
                        
                        {/* Last Payment */}
                        <div className="w-fit lg:h-full bg-neutral-1100 py-6 px-20 flex flex-row justify-between rounded-lg items-center gap-[56px]">

                            <div className="flex flex-col w-full gap-2">
                                <text className="text-neutral-600 text-[14px] font-medium flex flex-row gap-2 w-full content-center"><span className="material-symbols-outlined">calendar_month</span> Last Payment </text>

                                <text className="text-custom-green text-[16px] font-semibold text-right w-full">December 3, 2023</text>
                            </div>

                            {/* Value */}
                            <div className="bg-white py-4 w-[350px] h-full rounded-xl shadow-lg flex justify-center">
                                <text className="text-custom-green text-[16px] font-semibold text-center w-full"> P0.00 </text>   

                            </div>
                        </div>
                        
                        {/* Due Date */}
                        <div className="w-fit lg:h-full bg-neutral-1100 py-6 px-20 flex flex-row justify-between rounded-lg items-center gap-[56px]">

                            <div className="flex flex-col w-full gap-2">
                                <text className="text-neutral-600 text-[14px] font-medium flex flex-row gap-2 w-full content-center"><span className="material-symbols-outlined">event</span> Due Date </text>

                                <text className="text-red-100 text-[16px] font-semibold text-right w-full">January 3, 2024</text>
                            </div>

                            {/* Value */}
                            <div className="bg-white py-4 w-[350px] h-full rounded-xl shadow-lg flex justify-center">
                                <text className="text-red-100 text-[16px] font-semibold text-center w-full"> P0.00 </text>   

                            </div>
                        </div>
                    </div>
                </div>
                
                {/* News and Consumption Overview Section */}
                <div className="w-full h-[400px] flex flex-row gap-6">

                    {/* Alerts box */}
                    <div className="w-full bg-white drop-shadow-2xl py-6 px-12 rounded-lg h-full flex flex-col gap-4 overflow-hidden">
                        
                        {/* Header */}
                        <div className="flex justify-between items-center">
                            <text className="text-neutral-100 text-[18px] font-semibold font-noto"> Latest News</text>

                            <button className="underline text-neutral-400"> See all </button>
                        </div>
                        
                        {/* Alert list */}
                        <div className="h-full w-full flex flex-col">

                            {data.map((item,index) => 
                            
                            <a href="https://www.google.com"><div className='w-full bg-white border-2 rounded-lg p-2 border-neutral-700 align-middle flex flex-row gap-4 items-center h-fit' key={index}>
                                <div className="w-[90px] h-[90px] place-self-center border-2 border-neutral-300 p-2 flex justify-center rounded-lg bg-custom-green">
                                    <img src="assets/logo.png" alt="placeholder"/>
                                </div>
                                
                                <div className="flex flex-col w-full">
                                    <text className="text-neutral-100 font-semibold text-[18px]">{item.name}</text>  
                                    <text className="text-neutral-600">{item.date}</text>
                                </div>
                            </div></a>)
                            }

                         </div>


                    </div>

                    {/* Consumption Overview box */}
                    <div className="w-full bg-white drop-shadow-2xl py-6 px-12 rounded-lg h-full flex flex-col gap-4">
                        
                        {/* Header */}
                        <div className="flex justify-between">
                            <text className="text-neutral-100 text-[18px] font-semibold font-noto"> Consumption Overview</text>

                            <input type="month" className="border-2 rounded-md border-neutral-700"/>

                        </div>

                        {/* High and low */}
                        <div className="w-full h-[90px] bg-neutral-1100 border-2 border-neutral-900 rounded-[8px] py-6">
                            
                            <div className="h-full flex flex-row">
                                <div className="flex flex-col w-full justify-center items-center h-full">

                                    <text className="text-neutral-100 text-[16px] font-sans font-bold">0 kWh</text>

                                    <text className="text-neutral-600 text-[16px] font-sans font-regular">Lowest</text>

                                </div>
                                
                                {/* Vertical line */}
                                <div className="h-full bg-neutral-800 px-[1px]"/>

                                <div className="flex flex-col w-full justify-center items-center h-full">

                                    <text className="text-neutral-100 text-[16px] font-sans font-bold">0 kWh</text>

                                    <text className="text-neutral-600 text-[16px] font-sans font-regular">Highest</text>

                                </div>

                            </div>

                        </div>

                        <div className=" flex justify-center items-center">

                            {/* <text className="text-neutral-200 font-semibold text-[32px]">Graph goes here </text> */}

                        </div>


                    </div>

                </div>


            </div>


        </div>

    )
}

export default dashboardPage;