import React from 'react'
import PageHeader from '../components/PageHeader'
import HireResumeButton from '../components/HireResumeButton'

function about() {
  const data = {
    title: 'Why Choose Me ?',
    description: 'With three years of hands-on experience in web development, I specialize in creating dynamic web applications and CMS solutions. I bring static UIs to life by adding efficient logic and seamlessly integrating APIs, ensuring smooth functionality and enhanced user experiences. My attention to detail and focus on scalable solutions make me a reliable choice for your web development needs.',
    points: [
      "Expertise in both front-end and back-end web development.",
      "Proven ability to integrate APIs smoothly.",
      "Strong focus on optimizing user experience and performance.",
      "Committed to delivering scalable, maintainable, and robust solutions."
    ]
  }
  return (
    <div className="p-5 sm:px-32 flex justify-center items-center flex-col">
      <PageHeader title="About Us" sub="Why Choose Me ?"/>
      <div className="bg-white flex justify-center lg:flex-row flex-col w-full" style={{ boxShadow: "rgba(11, 191, 174, 0.35) 0px 5px 15px" }}>
        <div className="w-full flex justify-center items-center">
          <img src="prasad-aute.jpg" className='grayscale' alt="" />
        </div>
        <div className="w-full p-10 flex flex-col justify-evenly">
          <div className="">
          <span className='text-2xl font-medium py-1 text-gray-900'>{data.title}</span>
          <p className='text-md font-medium py-5 text-[#929292]'>{data.description}</p>
          </div>
          <div className="">
          <span className='text-xl font-semibold py-1 text-[#0bbfae]'>Heading</span>
          <ul className='marker:text-color list-inside list-disc text-orange-500 text-md font-medium py-1'>
            {data.points.map((point)=><li className='py-1' key={point}>
              <span className="text-[#929292]">{point}</span>
            </li>)}
          </ul>
          </div>
          <HireResumeButton/>
        </div>
      </div>
      {/* <div className="flex justify-center sm:flex-row flex-col w-[60rem] bg-red-400 h-auto" style={{boxShadow: "rgba(11, 191, 174, 0.35) 0px 5px 15px"}}>
        <div className="sm:w-full bg-green-400">
          sdas
          <img src="prasad-aute.jpg" alt="" className='sm:w-auto sm:h-auto w-[200px] h-[200px ] grayscale'/>
        </div>
        <div className="w-full p-5">v</div>
      </div> */}
    </div>
  )
}

export default about  