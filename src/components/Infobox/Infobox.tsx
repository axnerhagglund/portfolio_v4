
import React from 'react'

function Infobox() {
  return (
    <>
    <section className=" rounded mt-6 flex items-center gap-3.5 p-2 font-[poppins] border-2">
        <img className="  w-25 rounded" src="src/images/babes.jpg"/>
        <section className="font-semibold mr-2">
            <p className="font-extrabold">Axner</p>
            <p>Frontend developer</p>
            <p>Based in Gothenburg</p>
        </section>
    </section>
   
    </>
  )
}

export default Infobox