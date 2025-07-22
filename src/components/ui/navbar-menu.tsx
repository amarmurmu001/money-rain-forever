import { motion } from "motion/react";
const NavBar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#070707] absolute left-1/2 -translate-x-1/2 shadow-md rounded-full  py-4 px-4 flex items-center justify-between w-[80vw] mx-auto mt-4"
    >
      <div className="font-bold text-2xl px-5 text-[#7DF009]">MRF</div>
      <div>
        <ul className="flex space-x-10 text-[14px] ">
          <li className="text-white cursor-pointer hover:text-[#7DF009]">
            Home
          </li>
          <li className="text-white cursor-pointer hover:text-[#7DF009]">
            Product
          </li>
          <li className="text-white cursor-pointer hover:text-[#7DF009]">
            Company
          </li>
          <li className="text-white cursor-pointer hover:text-[#7DF009]">
            Contact
          </li>
          <li className="text-white cursor-pointer hover:text-[#7DF009]">
            Terms
          </li>
        </ul>
      </div>
      <button className="px-5 text-[14px] py-2 bg-[#7DF009] text-black rounded-full">
        Buy Access
      </button>
    </motion.nav>
  );
};

export default NavBar;
