"use client";
import React, { useState } from "react";
import Education from "./Education";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Skills from "./Skills";
import Work from "./Work";
import Other from "./Other";

function page() {
  const [tabs, setTabs] = useState([
    { name: "Education", href: "#", current: true, enum: "EDU" },
    { name: "Work History", href: "#", current: false, enum: "WORK" },
    { name: "Programming Skills", href: "#", current: false, enum: "SKILL" },
    { name: "Other", href: "#", current: false, enum: "OTHER" },
  ]);
  let [currentTab, setCurrentTab] = useState("EDU");

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  function changeTab(index) {
    let tempArray = tabs.map((item, i) =>
      i == index ? { ...item, current: true } : { ...item, current: false }
    );
    setTabs(tempArray);
    setCurrentTab(tempArray[index].enum);
    tempArray = [];
  }
  return (
    // <div className='flex flex-col sm:flex-row p-10'>
    //     <div className="bg-red-400 sm:w-1/3 w-full p-20" style={{ height: `calc(100vh - 200px)` }}>
    //       <div className="space-y-5">
    //         <div className="bg-gray-500 py-2 px-10">
    //           <span>ABC</span>
    //         </div>
    //         <div className="bg-gray-500 py-2 px-10">
    //           <span>ABC</span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="bg-green-400 sm:w-2/3 w-full p-20" style={{ height: `calc(100vh - 200px)` }}>b</div>
    // </div>
    <div className="bg-white m-10 p-10">
      <div className="flex justify-end">
        <a
          download="Resume-prasad-aute.pdf"
          href={'/resume'} className="hover:border bg-[#f57e18] border-0 mx-1 hover:border-[#f57e18] hover:bg-white hover:text-[#f57e18] text-white font-bold py-2 px-4 rounded-full">
          <FontAwesomeIcon icon={faDownload} className=""
          ></FontAwesomeIcon> Download
        </a>
      </div>
      <div>
        <div className="sm:hidden my-5">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            onChange={(e) => changeTab(e.target.value)}
            value={tabs.findIndex((tab) => tab.current == true)}
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          >
            {tabs.map((tab, index) => (
              <option key={tab.name} value={index}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav aria-label="Tabs" className="-mb-px flex">
              {tabs.map((tab, index) => (
                <a
                  onClick={() => changeTab(index)}
                  key={tab.name}
                  aria-current={tab.current ? "page" : undefined}
                  className={classNames(
                    tab.current
                      ? "border-[#f57e18] text-[#0bbfae] transition-all duration-300 ease-in-out cursor-pointer"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "w-1/4 border-b-2 px-1 py-4 text-center text-sm font-medium cursor-pointer"
                  )}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="sm:m-5 my-10 w-full h-full flex justify-center items-center">
          {currentTab == "EDU" && <Education />}
          {currentTab == "SKILL" && <Skills />}
          {currentTab == "WORK" && <Work />}
          {currentTab == "OTHER" && <Other />}
        </div>
      </div>
    </div>
  );
}

export default page;
