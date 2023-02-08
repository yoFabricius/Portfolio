import React from "react";
import me2 from "../img/me2.JPG"

function AboutMe() {
  return (
    <div className="h-screen flex items-center snap-start flex-col text-center md:flex md:flex-row">
      <div
        id="left"
        className="relative flex flex-1 items-center justify-center h-full "
      >
        <div id="card-bg" className="absolute w-[60%] h-70v left-[50px] top-[50px] bg-[#E76F51] rounded-[30px] invisible md:visible"></div>

        <div id="card" className="md:w-[60%] md:h-70v relative h-30v w-full  ">
          <img
            className="object-cover w-full h-full rounded-[30px]"
            src={me2}
            alt=""
          />
          
        </div>
      </div>

      <div id="right" className="flex-1 pb-10">
        <h1 className="font-bold text-6xl pb-2 text-[#E76F51]">About Me</h1>
      
        <p id="desc" className="pt-1 text-lg md:pr-10 text-[#E9C46A]">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores ea ipsum sit, suscipit nostrum perferendis dolorem error voluptatem non et eius corrupti voluptas cupiditate minus illum sed facilis a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quaerat qui quae labore, consectetur sit tenetur quam atque exercitationem, in voluptatem enim, sed aut distinctio natus quia nostrum reprehenderit perspiciatis!

        </p>
      </div>
    </div>
  );
}

export default AboutMe;
