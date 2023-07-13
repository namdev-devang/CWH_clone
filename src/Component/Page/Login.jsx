import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="main w-5/6 h-screen lg:w-46 flex justify-center my-10 lg:my-24 shadow-2xl rounded-xl mx-auto ">
        <div className="w-1/2 hidden md:block h-full">
          <img
            className="w-full h-full rounded-xl object-cover "
            src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80"
            alt=""
          />
        </div>

        <div className="w-full py-10 px-5 lg:w-1/2">
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-16"
              src="https://codewithharry.com/img/logo-blue.png"
              alt=""
            />

            <span className="text-2xl font-semibold text-blue-gray-900 my-1">
              CodeWithHarry.com
            </span>

            <span className="text-xl text-blue-gray-800 font-semibold">
              Welcome Back!
            </span>

            <Link to="/">
              <div className="flex border px-4 py-1 my-2">
                <img
                  src="https://img.icons8.com/?size=512&id=101340&format=png"
                  className="w-7 mx-1"
                  alt=""
                />
                Sign in with Goggle
              </div>
            </Link>

            <div className="text-xs text-gray-600 my-3">
              OR LOGIN WITH EMAIL
            </div>

            <form className="">
                <div className="flex my-8 text-center ">
                  <input 
                  placeholder="Email Address"
                  className=" bg-gray-900 rounded-sm py-1 px-4 text-white font-bold text-center"
                  type="email" />
                </div>

                <div className="flex my-8 text-center ">
                  <input 
                  placeholder="Password"
                  className=" bg-gray-900 rounded-sm py-1 px-4 text-white font-bold text-center"
                  type="password" />
                </div>

            </form>
                <button className="bg-gray-700 font-semibold text-white px-2 py-1 rounded-md flex justify-center">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
