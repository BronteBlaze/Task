import { useMediaQuery } from "react-responsive";

const SignIn = () => {
  const isMobile = useMediaQuery({ minWidth: 400, maxWidth: 700 });
  return (
    <div className="mt-12 px-3">
      <div className="flex justify-center text-center relative text-white">
        <div
          className={`bg-black/1 xl:w-[26%] md:w-[50%] lg:w-[35%] rounded-lg backdrop-brightness-50 ${
            isMobile && "w-[80%]"
          }`}
        >
          <div className="flex justify-center mx-8 relative text-xl text-white font-medium">
            <div className="bg-amber-400 -mt-6 w-full absolute py-5 rounded-md">
              SIGN IN
            </div>
          </div>
          <div className="mt-20">
            <div className="px-8">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="This is your public screen name"
                className="border-b border-gray-300 border-amber-400 bg-transparent w-full p-2"
              />
            </div>
            <div className="px-8 mt-6">
              <input
                type="passowrd"
                id="pass"
                name="pass"
                placeholder="Password"
                className="border-b border-gray-300 border-amber-400 bg-transparent w-full p-2"
              />
            </div>
            <div className="px-8 mt-10">
              <button className="bg-gray-500 w-full py-3 rounded-md">
                Sign In
              </button>
            </div>
            <div className="mt-10 pb-8">
              <span>Forget your password?</span>
              <span className="px-2 text-amber-400 font-medium">
                <button>Reset</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
