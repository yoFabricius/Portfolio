import Me from "../img/me.png";

function Introduction() {
  return (
    <div className="flex h-screen snap-start flex-col md:flex md:flex-row">
      <div id="left" className="flex flex-1 items-center justify-center ">
        <div
          id="left-wrap"
          className=" flex md:p-12 h-1/2 flex-col p-[10px] items-center text-center  justify-center"
        >
          <h2 className="text-4xl pb-2 text-[#E9C46A]">Hello, My name is</h2>
          <h1 className="text-6xl font-bold text-[#E9C46A]">Fabricius Eusebio</h1>
          <div className="">
            <div>
              <div className="flex items-center pt-2 md:text-3xl font-bold  text-[#e76f51] text-4xl">
                Web developer
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="right" className="flex-1 relative pb-[70px]">
        <div id="bg-shape" className="absolute bg-shape bg-[#E76F51] w-full h-full ">
          <img src={Me} alt="" className=" h-full w-full object-cover  " />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
