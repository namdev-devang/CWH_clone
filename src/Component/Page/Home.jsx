import React, { useState } from "react";
import HomeApi from "../Api/HomeApi";

function Home() {
  const [HOMEAPI] = useState(HomeApi);
  return (
    <>
      {/* section 1st */}
      <div className="slide flex lg:items-center ">
        <div className="left lg:px-10 py-24 items-center mx-2 ">
          <div className="items-center ">
            <h1 className="text-3xl text-center flex lg:justify-start justify-center font-bo ">
              Welcome to
              <h1 className="text-[#7e22ce] pl-2 text-center font-bold">
                CodeWithHarry
              </h1>
            </h1>
            <p className="text-center text-gray-500 lg:text-left py-4">
              Confused on which course to take? I have got you covered. Browse
              courses and find out the <br /> best course for you. Its free!
              Code With Harry is my attempt to teach basics and those coding
              <br />
              techniques to people in short time which took me ages to learn.
            </p>
          </div>

          <div className="flex lg:justify-start justify-center gap-5">
            <button className="bg-[#111827] text-gray-300 text-sm items-center text-center py-2 px-3 rounded-md font-bold">
              Free Course
            </button>
            <button className="bg-[#d1d5db] text-sm py-1 px-3 rounded-md">
              Explore Blog
            </button>
          </div>
        </div>
        <div className="right lg:block hidden">
          <img
            className="w-[48rem] h-[23rem]"
            src="https://d2ksis2z2ke2jq.cloudfront.net/uploads/2021/10/christopher-gower-m_HRfLhgABo-unsplash-999x665.jpg"
            alt=""
          />
        </div>
      </div>

      {/* section 2nd */}
      <h1 className="text-3xl text-center items-center font-semibold my-10 ml-4 ">
        Recommended Courses
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 ml-  ">
        {HOMEAPI.map((Curdata) => {
          return (
            <>
              <div className="shadow-lg my-2 px-4 rounded-xl mx-10">
                <img className="rounded-xl" src={Curdata.imgURL} alt="" />
                <h6 className="text-sm mt-5 mb-1">Free Course</h6>
                <h1 className="font-semibold text-lg mb-3 "> {Curdata.title}</h1>
                <p className="text-[#374151]"> {Curdata.description}</p>
                <button className="inline-block items-center bg-purple-700 hover:bg-purple-600 text-white font-semibold px-3 py-2 text-sm rounded-2xl my-2">
                  Start Watching
                </button>
              </div>
            </>
          );
        })}
      </div>

      {/* section 3rd */}
      <h1 className="text-3xl text-center my-10 font-semibold">Testimonials</h1>
      {/* card 1st  */}
      <div className="grid lg:grid-cols-2 py-5">
        <div className="bg-[#f3f4f6] mx-5 px-5 py-5 rounded-lg mb-10">
          <p>
            I don't have words to thank this man, I'm really grateful to have
            this channel and website in my daily routine. If you're a mere
            beginner, then you can trust this guy and can put your time into his
            content. I can assure you that it'll be worth it.
          </p>

          <div className="my-7">
            <h5>Mohit Kumar</h5>
            <h5 className="text-gray-700 text-sm">Web Developer</h5>
          </div>
        </div>

        {/* card 2nd  */}
        <div className="bg-[#f3f4f6] mx-5 px-5 py-5 rounded-lg mb-10">
          <p>
            For everyone who wants to level up their #Coding and #Dev skills -
            seriously, this channel is for you! Both basic and advanced stacks
            are covered on this channel, and one can learn according to his
            skill levels. And the icing on the cake is, everything is available
            for free.
          </p>

          <div className="my-7">
            <h5>Rakesh Shetty</h5>
            <h5 className="text-gray-700 text-sm">Web Developer</h5>
          </div>
        </div>
      </div>

    </>
  );
}
export default Home;
