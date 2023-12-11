import { IoMdDownload } from "react-icons/io";
import { IoReturnDownForwardOutline } from "react-icons/io5";

const AboutSection = () => {
  return (
    <div className="bg-[#191925]">
      <div className="  min-h-[70vh] max-w-[900px] mx-auto">
        <div className="flex justify-between w-full items-center flex-row-reverse  gap-16 py-10 ">
          <div className="text-white flex-1 ">
            <div className=" flex items-center gap-3">
              <IoReturnDownForwardOutline />
              <p className="text-xl font-semibold text-[#FDC76A]">About Me</p>
            </div>

            <p className="my-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              dolores iusto deleniti, saepe odio maxime ad quidem quae cum ea
              distinctio delectus illum, eum ducimus voluptas officiis vero?
              Quidem, incidunt.
            </p>
            <button className="text-[#FDC76A] border-[#FDC76A] py-1 px-4 hover:bg-[#FDC76A] hover:text-white rounded-lg  border-2">
              <div className="flex justify-center items-center gap-2">
                RESUME <IoMdDownload></IoMdDownload>
              </div>
            </button>
          </div>
          <div className="flex-1">
            <div className="w-[300px] h-[300px] border-8 border-[#FDC76A]">
              <div className="relative top-[10%] left-[10%]">
                <img
                  className="w-[300px] h-[300px]"
                  src="https://i.ibb.co/ydPz8Vk/406280253-324138007097757-2044409224292799984-n-removebg-preview-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="py-20">
          <div className=" text-white flex items-start ">
            <div className="flex items-center  gap-4 transform -rotate-90">
              <IoReturnDownForwardOutline />
              <p>Vertical Text</p>
            </div>
          </div>
        </div> */}

        <div className="pb-16 flex w-full">
          <div className="text-white flex ">
            <div className="flex gap-4 transform -rotate-90  w-[200px] h-[200px]">
              <IoReturnDownForwardOutline />
              <p className="text-[#FDC76A] text-xl font-semibold">My Skills</p>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap">
            <div className="h-28 w-28 bg-slate-400">
              <img
                src="https://i.ibb.co/Gkk0TqL/405420901-326232030206558-2092832378235797929-n.png"
                alt=""
              />
            </div>
            <img
              src="https://i.ibb.co/0FHSRVY/404459783-592152426373969-8621591042941160057-n.png"
              alt=""
            />
            <img
              src="https://i.ibb.co/x5NtrZQ/406883825-1581178175988087-8901636926776223258-n.png"
              alt=""
            />
            <img
              src="https://i.ibb.co/mTDsbJg/406492472-737393811591713-7035906674673719739-n.png
"
              alt=""
            />
            <img
              src="https://i.ibb.co/H7s6Tjn/icons8-git-48.png
"
              alt=""
            />
            <img
              src="https://i.ibb.co/kS77snB/icons8-javascript-48.png"
              alt=""
            />
            <img src="https://i.ibb.co/DWsCMfh/icons8-css-48.png" alt="" />
            <img src="https://i.ibb.co/GdLhDL6/icons8-html-48.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
