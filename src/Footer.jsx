const Footer = () => {
  return (
    <>
      <footer className="mx-auto flex flex-col md:flex-row md:justify-between py-6 items-center">
        <div className="left">
          <figure className="flex items-center">
            <img
              src="https://codewithharry.com/img/logo-blue.png"
              alt=""
              className="w-12 h-12 mx-4"
            />
            <figcaption className="text-lg font-bold text-gray-800">
              CodeWithHarry
            </figcaption>
          </figure>
        </div>
        <div className="middle text-gray-500 py-2">
          Copyright © 2022 CodeWithHarry.com
        </div>
        <div className="sm-icons py-1">
          <i className="bx bxl-facebook text-gray-500 text-2xl px-1"></i>
          <i className="bx bxl-instagram text-gray-500 text-2xl px-1"></i>
        </div>
      </footer>
    </>
  );
};
export default Footer;
