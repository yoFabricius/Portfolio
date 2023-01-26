import React from "react";
import Project from "./Project";
import { projects } from "../Data";

function ProjectList() {
  return (
    <div className="snap-start h-screen py-[50px] px-[100px] flex flex-col items-center text-center min-[320px]:p-[10px]">
      <div id="texts" className="md:w-[65%] w-full">
        <h1 id="title" className="text-[50px] font-bold text-[#E76F51]">
          Take a look at my projects!
        </h1>
        <p id="desc" className="my-[20px] mx-0 hidden md:block text-[#E9C46A]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo aliquam ea perferendis,
          commodi, voluptate voluptas quos quisquam nihil delectus rem laborum illo iure totam.
          Similique esse inventore repudiandae rerum repellendus.
        </p>
      </div>

      <div id="list" className="flex flex-wrap justify-between w-full overflow-scroll scrollbar-hide">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
