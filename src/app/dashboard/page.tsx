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
            <div className="w-[260px] h-full bg-green-100">


            </div>

            {/* Content Page */}
            <div>



            </div>


        </div>

    )
}

export default dashboardPage;