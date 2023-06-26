import React from "react";
import "./Sec1.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { ImYoutube } from "react-icons/im";

function Sec1() {
  return (
    <div className="Sec1">
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
    </div>
  );
}

export default Sec1;
