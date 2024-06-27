"use client"

import Link from "fs"
import Image from "next/image"
import { FormEventHandler, useState } from "react"




function loginPage() {

    return (

        // Container
        <div className="bg bg-gray-400 w-screen h-screen flex flex-row">

            {/* Placeholder background image */}
            <img src="assets/bg.png" alt="background" className="w-full"></img>
        
            
            {/* Login form container */}
            <div className="bg-white h-screen w-1/2 pt-16 pb-16 flex flex-col place-items-center pl-12 pr-12 relative">

                {/* Logo */}
                <img src="assets/logo.png" alt="logo" className="w-[330px] h-[100px]"/>

                <h1 className="text-custom-green text-center font-semibold text-2xl pt-8">Sign in</h1>
            
                <div className="w-full text-center h-full px-6 pt-4">
                    <form className="p-[24px] flex flex-col w-full space">
                            
                        {/* Mobile Number field */}
                        <div className="relative">

                            <label className=" font-sans text-left absolute top-[-12px] left-[10px] box-content"><text className="text-neutral-100 text-[12px] bg-white px-[4px]">Mobile number</text></label>

                            <input type="text" className="text-neutral-100 rounded-[4px] border-neutral-500 border-solid border-2 h-[50px] w-full p-4"/> <br/>

                        </div>
                        <br/>

                        {/* Password field */}
                        <div className="relative">
                            
                            <label className=" font-sans text-left absolute top-[-12px] left-[10px] size-[12px]"><text className=" text-neutral-100 text-[12px] bg-white px-[4px]">Password</text></label>
                            
                            <input type="password" className="text-neutral-100 rounded-[4px] border-neutral-500 border-solid border-2 h-[50px] w-full p-4"/><br/>

                        </div>
                    
                        <div className="space-y-[16px] pt-4">
                        {/* Login button */}
                        <button className="w-full text-neutral-200 bg-mustard-100 h-[50px] text-base font-semibold rounded-lg drop-shadow-md">Login</button>

                        <button className="w-full h-[50px] bg-neutral-200 text-white text-base font-semibold rounded-lg drop-shadow-md"> Login with OTP</button>

                        </div>
                    </form>

                    <text className="text-neutral-400">Do you have an account?</text>
                    <a href="https://www.google.com" className="text-custom-green underline"> Click here to register </a>


                </div>
                

                {/* alternative registrations */}
                <div>
                    <text className="text-neutral-300 font-semibold"> or you can register with...</text>

                </div>

        

                {/* Download Buttons */}
                <div className="flex flex-col relative border-t-2 border-neutral-700 bottom-0 items-center p-[8px] space-y-5">
                    
                    {/* Text */}
                    <div className="w-full">
                        <text className="text-custom-green"> MORE PowerUp </text>
                        
                        <text className="text-neutral-100"> is also available on Android and iOS devices </text>

                    </div>

                    <div className="flex flex-row w-full justify-center content-center gap-[56px] items-center">

                        <img src="assets/gp.png" alt="google play button" className="h-[70px]"/>

                        <img src="assets/ap.png" alt="apple store button" className="h-[50px]"/>

                    </div>
                    
                </div>

            </div>
        </div>



    )
}

export default loginPage;