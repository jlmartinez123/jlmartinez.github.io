"use client"

import Link from "fs";
import Image from "next/image";
import { useRouter } from "next/navigation";

function dashboardPage(){

    const router = useRouter();

    return (

        // Whole page
        <div className="flex flex-row w-screen h-screen bg-white">

            {/* Navigation Bar */}

            <div className="w-[260px] h-full bg-green-100 px-[16px] py-[32px]">
                <img src="assets/mpulogo.png" alt="MORE PowerUp Logo"/>

                {/* Navigation items */}
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


            </div>

            {/* Content Page */}
            <div>



            </div>


        </div>

    )
}

export default dashboardPage;