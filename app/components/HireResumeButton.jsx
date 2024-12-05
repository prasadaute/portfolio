import Link from "next/link";
import React from "react";

function HireResumeButton() {
  return (
    <div className="my-2 flex w-full sm:justify-start justify-center">
      <a href="mailto:prasadaute5171@gmai.com" className="hover:border bg-[#0bbfae] border-0 mx-1 hover:border-[#0bbfae] hover:bg-white text-white hover:text-[#0bbfae]  font-bold py-2 px-4 rounded-full">
        Contact
      </a>
      <Link
        href={'/resume'} className="hover:border bg-[#f57e18] border-0 mx-1 hover:border-[#f57e18] hover:bg-white hover:text-[#f57e18] text-white font-bold py-2 px-4 rounded-full">
        Get Resume
      </Link>
    </div>
  );
}

export default HireResumeButton;
