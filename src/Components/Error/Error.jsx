import { Link } from "react-router-dom";
import err from "./Scarecrow.png";

const Error = () => {
  return (
    <>
      <div className=" flex items-center min-h-screen justify-center w-11/12 mx-auto md:w-full">
        <div className="grid md:flex items-center gap-10">
          <div>
            <img className="md:w-[500px] w-full" src={err} alt="" />
          </div>
          <div>
            <h2 className=" text-5xl font-extrabold font-mono">
              I have bad news for you
            </h2>
            <p className=" font-mono mt-5">
              The page you are looking for might be removed or is temporarily
              unavailable
            </p>
            <div className=" mt-10">
              <Link to="/">
                <button className=" text-xl font-semibold font-mono hover:rounded-tr-3xl hover:rounded-bl-3xl hover:animate-bounce hover:shadow-xl shadow-md text-slate-50 bg-[#333333] rounded-sm px-6 py-6">
                  BACK TO HOMEPAGE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
