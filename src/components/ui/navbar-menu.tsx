import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [active, setActive] = useState("Home");

  const menuItems = ["Home", "Product", "Company", "Contact", "Terms"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{type: "spring", duration: 0.4 }}
      className="bg-[#070707] absolute left-1/2 -translate-x-1/2 shadow-md rounded-full py-4 px-4 flex items-center justify-between w-[80vw] mx-auto mt-4"
    >
      {/* Brand */}
      <div className="font-bold text-2xl px-5 text-[#7DF009]">MRF</div>

      {/* Menu with sliding background */}
      <ul className="flex space-x-4 relative text-[14px]">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className="relative px-2 py-2 cursor-pointer text-white"
          >
            {active === item && (
              <motion.div
                layoutId="menu-bg"
                className="absolute inset-0 border-b-2 border-[var(--green)]  z-0"
                transition={{ delay:-0.5, type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span
             
            >
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className="px-5 text-[14px] py-2 cursor-pointer bg-[#7DF009] text-black rounded-full">
        Buy Access
      </button>
    </motion.nav>
  );
};

export default NavBar;
