import { useState } from "react";
import CoursesApi from "../Api/CourseApi";

const Course = () => {
  const [COURSEAPI] = useState(CoursesApi);

  return (
    <>
            <h1 className=" text-center text-[#7e22ce] mt-10 font-semibold lg:text-3xl text-2xl">Premium Courses</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 w-full ">
        {COURSEAPI.map((cour) => {
          return (
            <>
              <div key={cour.id} className=" w-10/12 shadow-xl rounded-xl py-5 my-5 mx-5">

                <img className="rounded-xl w-fit" src={cour.imgURL} />

                <div className="px-3 py-2">
                  <div className="text-sm text-gray-400">
                    Free Course
                  </div>

                  <div className="text-xl font-semibold py-3">
                      {cour.title}
                  </div>
                  <div className="py-2 text-gray-800">
                      {cour.description}
                  </div>
                  
                  <button className="bg-[#7e22ce] rounded-full text-white font-semibold py-2 px-4 my-2 text-sm">Start Watching</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Course;
