import React from 'react'
import Infobox from '../Infobox/Infobox'
import ScrollSection from '../ScrollSection/ScrollSection'
import Wave from "../Wawe/Wave";
function SectionTwo() {
     
  return (
    <>
     <section className="h-screen flex flex-col items-center justify-center bg-[#fcf6df] text-[#AD8B73]">
        <ScrollSection>
        <h1 className='text-4xl font-[Poppins] font-extrabold'>Ohh, that's a relief</h1>
        <p className="font-semibold">anyway, <span className="border-b">this is me</span></p>
        <Infobox/>
        <h2 className=" pt-10 text-2xl font-bold font-[Poppins] " >Keep going</h2>
        </ScrollSection>
    </section>
    <Wave topColor="#fcf6df" bottomColor="#112D29"/>
    
    
   </>
   
  )
}

export default SectionTwo