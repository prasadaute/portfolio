import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
function ServiceCard({bgcolor,title,desciption}) {
  return (
    <div
      className={`w-[350px] h-[350px] flex flex-col justify-center items-center space-y-3 p-5`}
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", backgroundColor: bgcolor}}
    >
      <div className="">
      <FontAwesomeIcon icon={faCode} className="text-6xl text-white"
      ></FontAwesomeIcon>
      </div>
      <div className="text-xl font-semibold text-white text-center">{title}</div>
      <p className="text-sm text-center text-white">{desciption}</p>
    </div>
  );
}

export default ServiceCard;
