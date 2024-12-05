import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Description } from "@headlessui/react";
import React from "react";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";

function Education() {
  const data = [
    {
      title: "Master of Computer Applications (MCA)",
      college: "Indira College of Engineering and Management | Pune MH",
      university: "Savitribai Phule Pune University | Pune MH",
      date: "Year of passing – 2022",
      percentage: "77.70%",
      description: "aed",
      latest: true,
    },
    {
      title: "Bachelor of Computer Science (BCS)",
      college: "Deogiri College Aurangabad | Aurangabad MH",
      university:
        "Dr. Babasaheb Ambedkar Marathwada University | Aurangabad MH",
      date: "Year of passing – 2019",
      percentage: "57.93%",
      description: "aed",
      latest: false,
    },
    {
      title: "Higher Secondary (12th)",
      college: "Shivchhatrapati College | Aurangabad MH",
      university:
        "Maharashtra State Board of Secondary & Higher Secondary Education, Pune",
      date: "Year of passing – 2016",
      percentage: "63.38%",
      description: "aed",
      latest: false,
    },
    {
      title: "Matriculation (10th)",
      college: "Pioneers Secondary School | Aurangabad MH",
      university:
        "Maharashtra State Board of Secondary & Higher Secondary Education, Pune",
      date: "Year of passing – 2014",
      percentage: "62.60%",
      description: "aed",
      latest: false,
    },
  ];
  return (
    <div className="">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {data.map((val, i) => (
          <li className="mb-10 ms-6" key={i}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-[#0bbfae] rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              {/* <svg
                className="w-2.5 h-2.5 text-white dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg> */}
              <FontAwesomeIcon
                icon={faUserGraduate}
                className="text-xs text-white"
              ></FontAwesomeIcon>
            </span>
            <h3 className="flex sm:flex-row flex-col items-start mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {val.title}{" "}
              {/* {val.latest && <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 sm:ms-3">
                Latest
              </span>} */}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {val.date} | {val.percentage}
            </time>
            <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
              {val.college}
            </p>
            <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
              {val.university}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Education;
