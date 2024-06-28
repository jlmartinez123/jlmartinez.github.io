"use client"

import Link from "fs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "material-symbols";

function dashboardPage(){

    const router = useRouter();

    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (

        // Whole Page
        <div className="flex flex-row w-screen h-screen bg-white">

            {/* Navigation Bar */}
            <div className="w-[260px] h-full bg-green-100 px-[16px] py-[32px]">
                <img src="assets/mpulogo.png" alt="MORE PowerUp Logo"/>

                {/*========== Menu Container ==========*/}
                <div className="pt-[48px] space-y-[8px] text-left">

                    <button className="w-full text-white font-sans font-normal text-[14px] leading-[124%] tracking-[-3%] py-2 text-left">Dashboard</button>

                    <button className="w-full text-white font-sans font-normal text-[14px] leading-[124%] tracking-[-3%] py-2 text-left">Transactions</button>

                    <button className="w-full text-white font-sans font-normal text-[14px] leading-[124%] tracking-[-3%] py-2 text-left">Outages</button>

                    <button className="w-full text-white font-sans font-normal text-[14px] leading-[124%] tracking-[-3%] py-2 text-left">Alerts</button>

                    <button className="w-full text-white font-sans font-normal text-[14px] leading-[124%] tracking-[-3%] py-2 text-left">Update Account</button>

                    <button className="w-full text-white font-sans font-normal text-[14px] leading-[124%] tracking-[-3%] py-2 text-left">Services</button>

                    <button className="w-full text-white font-sans font-normal text-[14px] leading-[124%] tracking-[-3%] py-2 text-left">About MORE PowerUp</button>

                    <button className="w-full text-white font-sans font-normal text-[14px] leading-[124%] tracking-[-3%] py-2 text-left">Privacy Policy</button>

                    <button className="w-full text-white font-sans font-normal text-[14px] leading-[124%] tracking-[-3%] py-2 text-left">Terms and Conditions</button>

                    <button className="w-full text-white font-sans font-normal text-[14px] leading-[124%] tracking-[-3%] py-2 text-left">Contact Us</button>

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
                                    <text className="font-bold text-[14px] font-sans text-center text-neutral-100"> Nong Moroy </text>
                                </div>

                                <div className="w-full">
                                    <text className="font-bold text-[12px] font-sans text-center text-neutral-400"> JARTAC42922231 </text>
                                </div>

                            </div>

                        </div>

                        <button className="text-neutral-100 leading-[124%] text-[12px] p-2 font-semibold bg-mustard-100 w-full rounded-lg py-2 bottom-0 shadow-md">My Account</button>

                    </div>
                    
                    <div>
                        <button className="w-full text-white font-sans font-normal text-[14px] leading-[124%] tracking-[-3%] py-2 text-left">My Points</button>
                        
                        <button className="w-full text-white font-sans font-normal text-[14px] leading-[124%] tracking-[-3%] py-2 text-left">Settings</button>

                        <button className="w-full text-white font-sans font-normal text-[14px] leading-[124%] tracking-[-3%] py-2 text-left">Sign out</button>
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
                <div className="h-[210px] bg-white drop-shadow-xl rounded-lg py-6 px-12">

                    {/* Header */}
                    <div className="py-2 flex flex-row justify-between">
                        <h1 className="text-neutral-100 text-[18px] font-semibold">Billing Section</h1>

                        <button className="text-neutral-100 leading-[124%] text-[12px] p-2 font-semibold bg-mustard-100 inline-block rounded-lg py-4 px-[100px] bottom-0 shadow-md"> Pay Bill </button>
                    </div>
                    
                    {/* Analytics */}
                    <div className="flex flex-row gap-9">
                        
                        {/* Last Payment */}
                        <div className="w-full bg-neutral-1100 py-6 px-20 flex flex-row justify-between rounded-lg items-center gap-[56px]">

                            <div className="flex flex-col w-full gap-2">
                                <text className="text-neutral-600 text-[14px] font-medium"> Last Payment </text>

                                <text className="text-custom-green text-[16px] font-semibold text-right w-full">December 3, 2023</text>
                            </div>

                            {/* Value */}
                            <div className="bg-white py-4 w-[350px] h-full rounded-xl shadow-lg flex justify-center">
                                <text className="text-custom-green text-[16px] font-semibold text-center w-full"> P0.00 </text>   

                            </div>
                        </div>
                        
                        {/* Due Date */}
                        <div className="w-full bg-neutral-1100 py-6 px-20 flex flex-row justify-between rounded-lg items-center gap-[56px]">

                            <div className="flex flex-col w-full gap-2">
                                <text className="text-neutral-600 text-[14px] font-medium"> Due Date </text>

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
                    <div className="w-full bg-white drop-shadow-xl py-6 px-12 rounded-lg h-full">
                        
                        {/* Header */}
                        <div className="flex justify-between">
                            <text className="text-neutral-100 text-[18px] font-semibold"> Latest News</text>

                            <button className="underline text-neutral-400"> See all </button>
                        </div>

                        <div className="h-full flex justify-center items-center">
                            <text className="text-neutral-200 font-semibold text-[32px]">List goes here</text>
                        </div>


                    </div>

                    {/* Consumption Overview box */}
                    <div className="w-full bg-white drop-shadow-xl py-6 px-12 rounded-lg h-full">
                        
                        {/* Header */}
                        <div className="flex justify-between">
                            <text className="text-neutral-100 text-[18px] font-semibold"> Consumption Overview</text>

                            <input type="month" className="border-2 rounded-md border-neutral-700"/>

                        </div>

                        <div className="h-full flex justify-center items-center">

                            <text className="text-neutral-200 font-semibold text-[32px]">Graph goes here</text>

                        </div>


                    </div>

                </div>



            </div>


        </div>

    )
}

export default dashboardPage;