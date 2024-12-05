import React from 'react'

function PageHeader({title, sub}) {
  return (
    <div className='flex flex-col justify-center items-center p-5 mx-auto'>
      <div className="my-1 text-3xl text-[#0bbfae] font-semibold">{title}</div>
      <div className="my-1 text-sm text-[#0bbfae] border-b-2 pb-2 border-[#0bbfae] space-x-10">{sub}</div>
      </div>
  )
}

export default PageHeader