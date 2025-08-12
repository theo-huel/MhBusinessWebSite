"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInOnScrollLeft = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 300 }}
      animate={isInView ? { opacity: 1, x: 0 , y: 0 } : {}}
      transition={{ duration: 2, delay }}
    >
      {children}
    </motion.div>
  );
};
export default FadeInOnScrollLeft;


   