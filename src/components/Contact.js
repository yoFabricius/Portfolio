import React, { useRef } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";

function Contact() {
    const formRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className="h-screen snap-start relative">
      <div id="bg" className="w-[20px] h-[100%] bg-green-500 absolute"></div>
      <div id="wrapper" className="flex p-[50px]">
        <div id="left" className="flex-1">
          <h1 className="text-[60px] w-[80%]">Let's discuss your project</h1>
          <div id="info">
            <div id="info-item" className="flex items-center my-[50px] mx-0 font-bold w-[70%]">
              <PhoneIcon className="mr-[20px]" fontSize="large" />
              +1 978-390-3564
            </div>
            <div className="flex items-center my-[50px] mx-0 font-bold w-[70%]">
              <EmailIcon className="mr-[20px]" fontSize="large" />
              yofabricius@icloud.com
            </div>
            <div className="flex items-center my-[50px] mx-0 font-bold w-[70%]">
              <HomeIcon className="mr-[20px]" fontSize="large" />
              278 Lawrence st, Lawrence, MA, 01841
            </div>
          </div>
        </div>
        <div id="right" className="flex-1 flex flex-col items-center justify-center">
          <p className="text-lg">
            <b>What's your story?</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            repellat quod quia natus ratione mollitia perferendis, 
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-[20px]">
            <input type="text" placeholder="Name" name="user_name" className="w-[50%] h-[50px] border-b-black border-b-[1px] my-[10px] mx-0 text-[14px] pl-[10px]" />

            <input type="text" placeholder="Subject" name="user_subject" className="w-[50%] h-[50px] border-b-black border-b-[1px] my-[10px] mx-0 text-[14px] pl-[10px]" />

            <input type="text" placeholder="Email" name="user_email" className="w-[50%] h-[50px] border-b-black border-b-[1px] my-[10px] mx-0 text-[14px] pl-[10px]" />

            <textarea name="message" id="" cols="30" rows="5" placeholder="Message" className="w-full my-[10px] mx-0 text-[14px] pl-[10px] border-b-black border-b-[1px]" />
            <button className="p-[15px] bg-green-500 text-white font-semibold">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
