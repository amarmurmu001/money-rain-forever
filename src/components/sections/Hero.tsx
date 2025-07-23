import { motion } from "motion/react";

function Hero() {
  return (
    <div className="pt-[20vh] h-full w-full sm:h-[100vh] flex flex-col items-center justify-between space-y-10 px-4 text-center">
      
      {/* Tagline Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="border-[#ffffff3b] px-4 py-1 border rounded-full text-[10px] whitespace-nowrap md:text-base lg:text-base"
      >
        India's most trustable Community, our students make{" "}
        <span className="font-bold italic text-[var(--green)]">$567.5K+ </span>
        every month
      </motion.div>

      {/* Main Heading Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.6,
          type: "spring",
          stiffness: 100,
        }}
        className="font-bold text-4xl md:text-6xl lg:text-8xl leading-tight"
      >
        let the <span className="italic text-[var(--green)]">MONEY</span> rain <br />
        forever.
      </motion.div>

      {/* Button Animation */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.1 }}
        className="px-6 md:px-8 text-[16px] md:text-[20px] py-3 bg-[#7DF009] text-black rounded-full cursor-pointer shadow-lg"
      >
        BUY NOW
      </motion.button>

      {/* Trusted Stats Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-sm md:text-base max-w-md"
      >
        Trusted by{" "}
        <span className="font-bold italic text-[var(--green)]">48,000+ </span> <br />
        Members already earning
      </motion.div>
    </div>
  );
}

export default Hero;
