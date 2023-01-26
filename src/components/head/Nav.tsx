import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import CommonBtn from "../body/components/CommonBtn";

const Nav = () => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className="container m-auto xl:px-0 lg:px-0 md:px-0 sm:px-2 xs:px-2">
      <div className="flex justify-between items-center my-5">
        <h4 className="text-2xl font-bold">IDL</h4>
        <ul className="flex gap-10  xl:flex lg:flex md:flex sm:hidden xs:hidden">
          <li className="text-[#0E7644] font-semibold">Home</li>
          <li className="font-semibold text-[#1B1C1E] cursor-pointer hover:text-[#0E7644] transition-all duration-100">
            Products & Services
          </li>
          <li className="font-semibold text-[#1B1C1E] cursor-pointer hover:text-[#0E7644] transition-all duration-100">
            Testimonials & Partners
          </li>
          <li className="font-semibold text-[#1B1C1E] cursor-pointer hover:text-[#0E7644] transition-all duration-100">
            News
          </li>
          <li className="font-semibold text-[#1B1C1E] cursor-pointer hover:text-[#0E7644] transition-all duration-100">
            Contact
          </li>
        </ul>
        <div className="xs:hidden sm:hidden xl:block lg:block md:block">
          <CommonBtn text="Login" />
        </div>
        <button
          onClick={() => setIsActive(!isActive)}
          className="xs:block sm:block xl:hidden lg:hidden md:hidden"
        >
          <RxHamburgerMenu size={30} />
        </button>
      </div>
      <aside
        id="default-sidebar"
        className={`fixed top-0 xl:hidden lg:hidden md:hidden ${
          isActive ? "sm:fixed xs:fixed " : "sm:hidden xs:hidden"
        } right-0 z-40 w-64 h-screen  `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <div className="flex justify-end">
            <button onClick={() => setIsActive(false)}>
              <FaTimes />
            </button>
          </div>
          <ul className=" space-y-5 mt-10">
            <li className="p-2 rounded-lg bg-[#3c7b8833]">Home</li>
            <li className="p-2">Testimonials & Partners</li>
            <li className="p-2">Products & Services</li>
            <li className="p-2">News</li>
            <li className="p-2">Contact</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Nav;
