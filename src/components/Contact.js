import React, { useRef, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import emailjs from '@emailjs/browser';

function Contact() {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ezynwwn', 'template_s42uvrl', formRef.current, 'w1bMK6p7B3OxdIFQl')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className="h-screen snap-start relative ">
      <div id="bg" className="w-[20px] h-[100%] bg-green-500 absolute"></div>
      <div id="wrapper" className="flex p-[50px] flex-col py-[100px] md:flex-row">
        <div id="left" className="flex-1">
          <h1 className="md:text-[60px] w-[80%] font-semibold text-[30px]">Let's discuss your project</h1>
          <div id="info">
            <div id="info-item" className="flex items-center md:my-[50px] mx-0 font-bold md:w-[70%] my-[20px] w-full">
              <PhoneIcon className="mr-[20px]" fontSize="large" />
              +1 978-390-3564
            </div>
            <div className="flex items-center md:my-[50px] mx-0 font-bold md:w-[70%] my-[20px] w-full " onClick={(e) => {window.location.href ='mailto:yofabricius@icloud.com';}}>
              
              <EmailIcon className="mr-[20px]" fontSize="large" />
              yofabricius@icloud.com
            </div>
            <div className="flex items-center md:my-[50px] mx-0 font-bold md:w-[70%] my-[20px] w-full">
              <HomeIcon className="mr-[20px]" fontSize="large" />
              278 Lawrence st, Lawrence, MA, 01841
            </div>
          </div>
        </div>
        <div id="right" className="flex-1 flex flex-col items-center justify-center">
          <p className="text-lg min-[320px]:hidden">
            <b>What's your story?</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
            repellat quod quia natus ratione mollitia perferendis, 
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-[20px] min-[320px]:mt-0 min-[320px]:flex min-[320px]:flex-wrap">
            <input type="text" placeholder="Name" name="user_name" className="w-[50%] h-[50px] border-b-black border-b-[1px] my-[10px] mx-0 text-[14px] pl-[10px]" />

            <input type="text" placeholder="Subject" name="user_subject" className="w-[50%] h-[50px] border-b-black border-b-[1px] my-[10px] mx-0 text-[14px] pl-[10px]" />

            <input type="text" placeholder="Email" name="user_email" className="w-[50%] h-[50px] border-b-black border-b-[1px] my-[10px] mx-0 text-[14px] pl-[10px]" />

            <textarea name="message" id="" cols="30" rows="5" placeholder="Message" className="w-full my-[10px] mx-0 text-[14px] pl-[10px] border-b-black border-b-[1px]" />
            <button className="p-[15px] bg-green-500 text-white font-semibold">Submit</button>
            {done && "Thank You!"}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
