import { Description } from '@headlessui/react'
import React from 'react'
import { faBriefcase} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Work() {
    let data = [
        {
            title: "Paiteq Private Limited, 5th Floor, Jp Nagar Phase 2 Bangalore, 560078",
            date: "Feb 2022 - Currently Working",
            role: "Software Developer",
            description: "30 Days Notice period",
            mode: "WFH"
        }
    ]
    const calculateDateDifference = (date) => {
      const currentDate = new Date();
      const givenDate = new Date(date);
  
      // Calculate the difference in years
      let years = currentDate.getFullYear() - givenDate.getFullYear();
      let months = currentDate.getMonth() - givenDate.getMonth();
  
      // Adjust months and years if necessary
      if (months < 0) {
        years -= 1;
        months += 12;
      }
  
      return `${years} years, ${months} months`;
    };
  return (
    
<ol className="relative border-s border-gray-200 dark:border-gray-700">                  
   {data.map((val,i)=> <li className="mb-10 ms-6" key={i}>            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-[#0bbfae] rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <FontAwesomeIcon
                icon={faBriefcase}
                className="text-xs text-white"
              ></FontAwesomeIcon>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{val.title} <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">{val.mode}</span></h3>
        <h3 className="flex items-center mb-1 text-sm font-semibold text-gray-900 dark:text-white">{val.role} ({calculateDateDifference('2022-02-28')})</h3>
        <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">{val.date}</p>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{val.description}</time>
    </li>)}
</ol>


  )
}

export default Work