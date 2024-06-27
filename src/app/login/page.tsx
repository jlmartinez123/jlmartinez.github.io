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
            <div className="bg-white h-screen w-1/2 pt-16 pb-16 flex flex-col place-items-center pl-20 pr-20">

                {/* Logo */}
                <img src="assets/logo.png" alt="logo" className="w-[330px] h-[100px]"/>

                <h1 className="text-custom-green text-center font-semibold text-2xl pt-8">Sign in</h1>
            
                <div className="w-full text-center">
                    <form className="p-[24px] flex flex-col w-full">
                            
                        {/* Mobile Number field */}
                        <label className="text-neutral-100 font-sans text-left">Mobile number</label>

                        <input type="text" className="text-neutral-100 rounded-[4px] border-neutral-500 border-solid border-2 h-[50px] w-full p-4"/> <br/>


                        {/* Password field */}
                        <div>
                            
                            <label className="text-neutral-100 font-sans text-left absolute">Password</label>

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
                
            

                {/* Download Buttons */}
                <div className="flex flex-row border-neutral-700 border-t-2 w-full">

                    <div className="flex flex-row w-full">

                        <button className="w-full m-4 h-[50px] bg-neutral-200 text-white text-base font-semibold rounded-lg">Login with OTP</button>

                        <button className="w-full m-4 h-[50px] bg-neutral-200 text-white text-base font-semibold rounded-lg">Login with OTP</button>

                    </div>
                    
                </div>

            </div>
        </div>



    )
}

export default loginPage;