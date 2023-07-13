import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      {/* section 1st */}
      <div className="container min-w-full shadow-md">
        <div className="navbar flex justify-between items-start px-5 py-5 ">
          <Link
            to="/"
            className=" flex cursor-pointer text-purple-700 text-xl font-semibold"
          >
            CodeWithHarry
          </Link>

          <div className="flex gap-5 items-center">
            <Link
              to="/"
              className=" text-sm text-[#676767] lg:block hidden hover:underline"
            >
              Home
            </Link>
            <Link
              to="/course"
              className=" text-sm text-[#676767] lg:block hidden hover:underline"
            >
              Course
            </Link>
            <Link
              to="/blog"
              className=" text-sm text-[#676767] lg:block hidden hover:underline"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="mr-5 text-sm text-[#676767] lg:block hidden hover:underline"
            >
              Contact
            </Link>

            <Link to='/login'>
            <button className="bg-[#7e22ce] hover:bg-[#6b21a8] px-2 py-1 text-white rounded-md ">
              Login
            </button>
            </Link>

            <Link to='/signup'>
            <button className="bg-[#7e22ce] hover:bg-[#6b21a8] px-2 py-1 text-white rounded-md lg:block hidden  ">
              Sign Up
            </button>
            </Link>
          </div>
        </div>

        <hr />

        
        <div className="flex justify-center gap-5 py-3">
          {/* 1st founder */}
          <div className="text-[#7e22ce] hover:font-semibold hover:underline md:block hidden cursor-pointer">
            HTML
          </div>
          <div className="text-[#7e22ce] hover:font-semibold hover:underline md:block hidden cursor-pointer">
            CSS
          </div>
          <div className="text-[#7e22ce] hover:font-semibold hover:underline md:block hidden cursor-pointer">
            JS
          </div>
          <div className="text-[#7e22ce] hover:font-semibold hover:underline md:block hidden cursor-pointer">
            C
          </div>
          <div className="text-[#7e22ce] hover:font-semibold hover:underline md:block hidden cursor-pointer">
            C++
          </div>
          <div className="text-[#7e22ce] hover:font-semibold hover:underline md:block hidden cursor-pointer">
            JAVA
          </div>
          <div className="text-[#7e22ce] hover:font-semibold hover:underline md:block hidden cursor-pointer">
            PYTHON
          </div>
          <div className="text-[#7e22ce] hover:font-semibold hover:underline md:block hidden cursor-pointer">
            PHP
          </div>
          <div className="text-[#7e22ce] hover:font-semibold hover:underline md:block hidden cursor-pointer">
            REACT JS
          </div>  


          {/* 2nd founder */}
          <Link to='/'>
          <div className="text-[#7e22ce] hover:font-semibold hover:underline md:hidden  cursor-pointer">
            Home
          </div>
          </Link>

          <Link to='/course'>
          <div className="text-[#7e22ce] hover:font-semibold hover:underline md:hidden  cursor-pointer">
            Course
          </div>
          </Link>

          <Link to='/blog'>
          <div className="text-[#7e22ce] hover:font-semibold hover:underline md:hidden  cursor-pointer">
            Blog
          </div>
          </Link>

          <Link to='/contact'>
          <div className="text-[#7e22ce] hover:font-semibold hover:underline md:hidden  cursor-pointer">
            Contact
          </div>
          </Link>
       
        </div>
      </div>
    </>
  );
}
export default Header;
