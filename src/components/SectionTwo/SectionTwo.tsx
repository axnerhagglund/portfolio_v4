import React from 'react'
import Infobox from '../Infobox/Infobox'

function SectionTwo() {
  return (
     <section className="h-screen flex flex-col items-center justify-center bg-[#fcf6df] text-[#AD8B73]">
        <h1 className='text-4xl font-[Poppins] font-semibold'>Ohh, what a relief</h1>
        <p className="font-semibold">any way, <span className="border-b">this is me</span></p>
        <Infobox/>
    </section>
  )
}

export default SectionTwo