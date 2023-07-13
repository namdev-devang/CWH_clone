function Contact() {
  return (
    <>
      <div className="main shadow-xl my-32 w-auto flex flex-col md:mx-32 justify-center rounded-lg bg-[#f3f4f6]">
        <div className="my-10 ">
          <div className="">
            <h2 className="text-center font-semibold text-3xl my-5">
              Feel free to contact us!
            </h2>
          </div>

          <div className="flex justify-center">
            <img src="https://www.codewithharry.com/img/logo-blue.png" alt="" />
          </div>

          <div className="flex justify-center gap-10  py-5 my-2">
            <a href="https://www.facebook.com/codewithharry">
              <img
                className="w-10 hover:bg-purple-200 hover:rounded-full"
                src="https://img.icons8.com/?size=512&id=8818&format=png"
              />
            </a>

            <a href="https://www.twitter.com/codewithharry">
              <img
                className="w-10 hover:bg-purple-200 hover:rounded-full"
                src="https://img.icons8.com/?size=512&id=101340&format=png"
              />
            </a>

            <a href="https://www.instagram.com/codewithharry">
              <img
                className="w-10 hover:bg-purple-200 hover:rounded-full"
                src="https://img.icons8.com/?size=512&id=32292&format=png"
              />
            </a>

            <a href="https://www.github.com/codewithharry">
              <img
                className="w-10 hover:bg-purple-200 hover:rounded-full"
                src="https://img.icons8.com/?size=512&id=12599&format=png"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
