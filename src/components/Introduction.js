import Me from "../img/me.png";

function Introduction() {
  return (
    <div className="flex h-screen snap-center">
     
      <div id="left" className="flex flex-1 items-center justify-center snap-start ">
        <div id="left-wrap" className=" flex p-12 h-1/2 flex-col justify-between">
          <h2 className="text-4xl pb-2">Hello, My name is</h2>
          <h1 className="text-6xl font-bold">Fabricius Eusebio</h1>
          <div className="">
            <div>
              <div className="flex items-center pt-2 text-3xl font-bold  text-green-500">
                Web developer
              </div>
            </div>
          </div>

          <p id="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repudiandae in iure, id
            deleniti eaque beatae, assumenda quidem mollitia unde asperiores laudantium porro
            voluptates eligendi at aut ipsam vero cumque!
          </p>
        </div>
      </div>
      

      <div id="right" className="flex-1 relative">
        <div id="bg-shape" className="absolute bg-shape bg-[#FC814A] w-full h-full">
          <img src={Me} alt="" className=" h-full w-full object-cover " />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
