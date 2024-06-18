"use client"
import Image from "next/image";

export default function Home() {
  return <div className=" max-w-full h-screen flex items-center justify-center">
    <button className="border white py-[8px] px-[16px] rounded-[8px] bg-blue-500" onClick={()=>(
    window.alert("Hello World!")
  )
    
  }>Click Me!</button>
</div>

}
