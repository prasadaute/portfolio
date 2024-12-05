"use client";
import HireResumeButton from "./components/HireResumeButton";
import { useEffect, useState } from "react";
export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);  // State to control loading screen visibility
  const [fadeOut, setFadeOut] = useState(false);     // State to control fade-out effect

  useEffect(() => {
    let hasVisited = sessionStorage.getItem('hasVisited');
    if(hasVisited){
      setIsLoading(false)
    }else{
      setIsLoading(true);
      sessionStorage.setItem('hasVisited', 'true')
      const timer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsLoading(false); // Hide the loading screen completely
        }, 1000); // This matches the duration of the fade-out (1s)
      }, 1500); // Simulate 2 seconds of loading time
      return () => clearTimeout(timer);
    }
  }, []);
  // useEffect(() => {
    
    // if (hasVisited) {
    //   setIsLoading(false)
    // } else {
    //   sessionStorage.setItem('hasVisited', 'true')

    //   const timer = setTimeout(() => {
    //     setIsLoading(false)  // Hide loading screen after 5 seconds
    //   }, 5000)

    //   return () => clearTimeout(timer)
    // }
  // }, [])
  return (
    <div className="">
      {isLoading ? (
        <div className={`loading-screen typewriter ${fadeOut ? 'fade-out' : ''}`}>
        <div className="w-fit">
        <h1 className="sm:text-md text-2xl">prasadaute<span className="text-orange-400">.js</span></h1>
        <div className="flex justify-center items-center">
        <div className="sm:w-20 w-14">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#F57E18" stroke="#F57E18" strokeWidth="15" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#F57E18" stroke="#F57E18" strokeWidth="15" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#F57E18" stroke="#F57E18" strokeWidth="15" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
        </div>
        </div>
        </div>
      </div>
      ) : (
        <div className="flex-col-reverse sm:flex-row flex p-5 h-full">
          <div className="w-full flex justify-end py-5 sm:px-20 px-8 items-center">
            <div className="">
              <div className="flex justify-center sm:justify-start">
                <span className="text-[#0bbfae] sm:text-2xl text-xl font-thin">
                  Hello, IM{" "}
                  <span className="text-[#f57e18] transition-all duration-300 ease-in-out font-semibold sm:text-3xl text-2xl sm:hover:text-4xl hover:text-3xl cursor-pointer">
                    Prasad Aute
                  </span>
                </span>
              </div>
              <div className="flex justify-center sm:justify-start font-semibold sm:text-5xl text-3xl text-[#0bbfae]">
                Web Developer
              </div>
              <div className="sm:text-lg text-sm text-[#929292]">
                Developing websites for over <b>3 years</b> as a software
                developer
              </div>
              <HireResumeButton />
            </div>
          </div>
          <div className="w-full p-10 flex sm:justify-start justify-center items-center">
            <div className="p-2 inline-block ring-4 ring-white shadow-2xl rounded-full shake-image bg-white">
              <img
                src="prasad-aute.jpg"
                alt=""
                className="w-[20rem] rounded-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
