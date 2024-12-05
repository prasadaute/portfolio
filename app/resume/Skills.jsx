import React from "react";

function Skills() {
    const skills = [
        {
            icon: "devicon-html5-plain",
            title: "HTML"
        },
        {
            icon: "devicon-css3-plain",
            title: "CSS"
        },
        {
            icon: "devicon-javascript-plain",
            title: "Javascript"
        },
        {
            icon: "devicon-angularjs-plain",
            title: "Angular"
        },
        {
            icon: "devicon-react-original",
            title: "React"
        },
        {
            icon: "devicon-mongodb-plain",
            title: "Mongodb"
        },
        {
            icon: "devicon-express-original",
            title: "Express"
        },
        {
            icon: "devicon-bootstrap-plain",
            title: "Bootstrap"
        },
        {
            icon: "devicon-tailwindcss-original",
            title: "Tailwind CSS"
        },
        {
            icon: "devicon-nodejs-plain-wordmark",
            title: "Node"
        },
        {
            icon: "devicon-typescript-plain",
            title: "Typescript"
        },
        {
            icon: "devicon-nextjs-original-wordmark",
            title: "Next"
        },
        {
            icon: "devicon-nestjs-original",
            title: "Nest"
        },
        {
            icon: "devicon-redux-original",
            title: "Redux"
        },
        {
            icon: "devicon-graphql-plain",
            title: "Graphql"
        },
        {
            icon: "devicon-postgresql-plain",
            title: "Postgresql"
        },
    ]
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-0 cursor-pointer">
      {skills.map((val,index)=><div key={index} className="w-[200px] h-[200px] flex justify-center items-center flex-col group hover:bg-[#0bbfae]">
        <i className={`${val.icon} text-7xl text-[#0bbfae] group-hover:text-white cursor-pointer`}></i>
        <span className="font-semibold my-5 group-hover:text-white text-[#0bbfae] group-hover:text-xl group-hover:m-7 transform duration-500 ease-in-out">{val.title}</span>
      </div>)}
    </div>
  );
}

export default Skills;
