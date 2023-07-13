import { useState } from "react";
import BlogApi from '../Api/BlogApi'
const Blog = () =>{
    const [blogApi] = useState(BlogApi);
  return (
    <>
      <div className="bg-gray-100">
        <section className="w-11/12 py-4 my-1 mx-auto">
          <h2 className="font-bold px-4 py-1 text-[#374151] text-3xl">
            CodeWithHarry Blog (10)
          </h2>
          
          <div className="blogs-container my-3">
            {blogApi.map((blog) => {
              return (
                <>
                  <div key={blog.id} className="blog lg:w-4/6 my-5 bg-white rounded-md p-5">
                    <div className="date py-1">{blog.date}</div>
                    <div className="title text-[#384151] font-bold py-2 text-2xl">
                     {blog.title}
                    </div>
                    <div className="describe py-1 text-gray-600">
                     {blog.describe}
                    </div>
                    <a
                      href={blog.link}
                      className="text-blue-700"
                    >
                      Read More
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
export default Blog;