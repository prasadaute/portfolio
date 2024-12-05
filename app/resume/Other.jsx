import { Description } from '@headlessui/react'
import React, { useState } from 'react'

function Other() {
  const data = [
    {title: "What is my date of Birth ?" , description: "I was born on 28 Sep 1998", list: []},
    {title: "What languages I can speak ?" , description: "English, Hindi, Marathi (Native)", list: []},
    {title: "What is my Hobby ?" , description: "I am Video Game Enthusiast", list: []},
    {title: "what are my strength ?" , description: "", 
      list: [
        "Good Listener",
        "Calm & Honest",
        "Team Work",
        "Problem Solving & Collaboration"
      ]},
  ]
  const [item, setItem]= useState(null);
  function openBox(i){
    item == i ? setItem(null) : setItem(i)
  }
  return (
    
<div className="sm:w-2/3">
<div >
  {data.map((val,i)=> <div key={i}>
    <h2 id={`accordion-collapse-heading-${i+1}`}>
    <button type="button" className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 ${ i == 0 && "rounded-t-xl"} focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1`}>
      <span className='font-semibold'>{val.title}</span>
      <svg onClick={()=> openBox(i)} data-accordion-icon className={`w-3 h-3 ${item !== i ? "rotate-180" : "rotate-0"} shrink-0 transition-all duration-100 ease-in-out`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-1" className={`${item !== i && 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      {val.description && <p className="mb-2 text-gray-500 dark:text-gray-400">{val.description}</p>}
      {val.list.length > 0 && <div className="text-gray-500 dark:text-gray-400">{
        <ol className='list-disc px-5'>
          {val.list.map((l)=><li className='py-1' key={l}>{l}</li>)}
        </ol>
        }</div>}
    </div>
  </div>
  </div>)}
</div>
</div>

  )
}

export default Other