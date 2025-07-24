import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react"; // install lucide-react if needed

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Product", "Company", "Contact", "Terms"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.4 }}
      className="bg-[#070707] backdrop-blur-lg fixed z-50 left-1/2 -translate-x-1/2 shadow-md rounded-full py-4 px-4 flex items-center justify-between w-[90vw] md:w-[80vw] mx-auto mt-4"
    >
      {/* Brand */}
      <div className="font-bold text-2xl px-2 text-[#7DF009]">MRF</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 relative text-[14px]">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className="relative px-2 py-2 cursor-pointer text-white"
          >
            {active === item && (
              <motion.div
                layoutId="menu-bg"
                className="absolute inset-0 border-b-2 border-[var(--green)] z-0"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className="hidden md:block px-5 text-[14px] py-2 cursor-pointer bg-[#7DF009] text-black rounded-full">
        Buy Access
      </button>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden pr-2 flex">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white transition-all ease-in-out">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[70px] left-1/2 -translate-x-1/2  bg-[#070707] text-white rounded-lg shadow-lg p-4 flex flex-col space-y-2 md:hidden w-[80vw]"
          >
            {menuItems.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setActive(item);
                  setIsOpen(false);
                }}
                className={`px-3 py-2 rounded cursor-pointer hover:bg-[#111] ${
                  active === item ? " border-[#7DF009]" : ""
                }`}
              >
                {item}
              </li>
            ))}
            <button className="mt-2 px-3 py-2 text-[14px] bg-[#7DF009] text-black rounded-full">
              Buy Access
            </button>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
