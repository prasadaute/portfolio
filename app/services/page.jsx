import React from "react";
import PageHeader from "../components/PageHeader";
import ServiceCard from "./ServiceCard";

function page() {
  return (
    <div>
      <PageHeader title="Services" sub="What we provide you ?" />
      <div className="flex sm:flex-row flex-col sm:space-x-5 justify-center items-center sm:p-20 p-5 space-y-5 sm:space-y-0">
        <ServiceCard bgcolor="#8540ff" title="Frontend Development" desciption="A front-end developer focuses on building the user interface (UI) and user experience (UX) of websites or web applications. They work with HTML, CSS, JavaScript, and frameworks like React or Angular to ensure the design is responsive, interactive, and visually appealing. Their goal is to create a seamless and engaging experience for the end user."/>
        <ServiceCard bgcolor="#ffc40d" title="Backend Development" desciption="A back-end developer works on the server-side of web applications, handling databases, server logic, and API integrations. They write code in languages like Node.js, Python, Ruby, or Java, and ensure data flows smoothly between the front-end and back-end. They focus on performance, security, and scalability of web systems."/>
        <ServiceCard bgcolor="#ec407a" title="Full-stack Development" desciption="A full-stack developer is proficient in both front-end and back-end technologies, bridging the gap between the two. They handle the entire development process, from designing interactive interfaces to setting up databases and server-side logic. Full-stack developers are versatile problem-solvers capable of building complete, functional web applications."/>
      </div>
    </div>
  );
}

export default page;
