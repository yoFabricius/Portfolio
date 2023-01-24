import React from "react";

function AboutMe() {
  return (
    <div className="h-screen flex items-center snap-start ">
      <div
        id="left"
        className="relative flex flex-1 items-center justify-center h-full "
      >
        <div id="card-bg" className="absolute w-[60%] h-70v left-[50px] top-[50px] bg-gray-800 rounded-[30px]"></div>

        <div id="card" className="w-[60%] h-70v relative ">
          <img
            className="object-cover w-full h-full rounded-[30px]"
            src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ"
            alt=""
          />
        </div>
      </div>

      <div id="right" className="flex-1">
        <h1 className="font-bold text-6xl ">About Me</h1>
      
        <p id="desc" className="pt-1 text-lg ">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores ea ipsum sit, suscipit nostrum perferendis dolorem error voluptatem non et eius corrupti voluptas cupiditate minus illum sed facilis a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quaerat qui quae labore, consectetur sit tenetur quam atque exercitationem, in voluptatem enim, sed aut distinctio natus quia nostrum reprehenderit perspiciatis!

        </p>
      </div>
    </div>
  );
}

export default AboutMe;
