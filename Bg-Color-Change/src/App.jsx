import React, { useState } from 'react'

export default function App() {
  const [color, setcolor] = useState("");

  const  colorList = ["green", "red", "blue","skyblue","orange","black"];
  return (
    <div className='w-full h-screen ' style={{ backgroundColor: color }}>


      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
        
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
              {colorList.map((val,index)=> <button key={index}type="button" onClick={() => setcolor(val)} className={`text-white bg-gradient-to-r from-${val}-500 via-${val}-600 to-${val}-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-${val}-300 dark:focus:ring-${val}-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}>{val[0].toUpperCase()+val.slice(1,val.length)}</button>
              )}
          </div>
        </div>
      </nav>
            <div>
              <h1>hello</h1>
            </div>
    </div>
    
  )
}
