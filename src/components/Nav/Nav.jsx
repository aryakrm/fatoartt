import React from "react";
import "./Nav.scss";
import { motion } from "framer-motion";

function Nav() {
  return (
    <div className="Nav">
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        src="/assets/fatoArttLogo.png"
        alt="Fato Artt Logo"
      />
    </div>
  );
}

export default Nav;
