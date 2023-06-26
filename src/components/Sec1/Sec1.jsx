import React from "react";
import "./Sec1.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { ImYoutube } from "react-icons/im";
import { motion } from "framer-motion";

function Sec1() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="Sec1"
    >
      <h1>Sevdikleriniz için en özel hediye. </h1>
      <h2>
        %100 el yapımı uygun fiyatlı karakalem çalışmaları için hemen şimdi
        bizimle iletişime geçin!
      </h2>
      <a
        className="contact-btn"
        href="https://wa.me/905545626497"
        target={"_blank"}
      >
        İletişime Geç
      </a>
      <div className="contact-icons">
        <a href="https://wa.me/905545626497" target={"_blank"}>
          <IoLogoWhatsapp />
        </a>
        <a
          href="https://instagram.com/fato_artt?igshid=MzNlNGNkZWQ4Mg=="
          target={"_blank"}
        >
          <RiInstagramFill />
        </a>
        <a href="https://www.youtube.com/@fato_oz" target={"_blank"}>
          <ImYoutube />
        </a>
      </div>
    </motion.div>
  );
}

export default Sec1;
