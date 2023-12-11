import { IoMdDownload } from "react-icons/io";
import { IoReturnDownForwardOutline } from "react-icons/io5";
const Banner = () => {
  return (
    <div className="bg-[#191D28] w-full">
      <div className="flex justify-between w-full items-center max-w-[900px] mx-auto ">
        <div className="text-white  border-l-8 mt-4 pl-8 border-[#FDC76A]">
          <div className=" flex items-center gap-3">
            <IoReturnDownForwardOutline />
            <p className="text-xl font-semibold">Hello</p>
          </div>
          <h1 className="text-xl font-semibold">
            {`I'm`}{" "}
            <span className="text-6xl text-[#FDC76A] font-semibold">
              Kaium Ikbal
            </span>
          </h1>
          <h3 className="text-xl font-semibold my-4">
            Frontend Software Developer
          </h3>
          <button className="text-[#FDC76A] border-[#FDC76A] py-1 px-4 hover:bg-[#FDC76A] hover:text-white rounded-lg  border-2">
            <div className="flex justify-center items-center gap-2">
              RESUME <IoMdDownload></IoMdDownload>
            </div>
          </button>
        </div>
        <div>
          <div>
            <img
              src="https://i.ibb.co/v1K6GrH/406472771-1056833708686975-5831523570874916710-n-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
