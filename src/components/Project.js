import React from "react";

function Project({img,link}) {
  return (
    <div className="w-[30%] h-40v my-[20px] mx-[10px] border-[2px] border-[rgb(243, 242, 242)] rounded-tl-[10px] rounded-tr-[10px] rounded-br-none rounded-bl-none overflow-hidden">
     
      <a href={link} target="_blank" rel="noreferrer" >
        <img src={img} alt="" className="w-full transition duration-[10s] hover:ease-in-out hover:translate-y-[-100%]" />
      </a>
    </div>
  );
}

export default Project;
