import { useState, React } from "react";
import "./Nav.scss";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const [active, setActive] = useState(false);

  const menuTogglerHandler = () => {
    setActive(!active);
  };
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
      {!active ? (
        <div onClick={menuTogglerHandler} className="hamburger">
          {active ? (
            <AiOutlineClose className="_icon" />
          ) : (
            <GiHamburgerMenu className="_icon" />
          )}
        </div>
      ) : null}
      {active ? (
        <motion.div
          className="side-menu"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          onClick={menuTogglerHandler}
        >
          <motion.div
            className="menu-list"
            initial={{ y: "300vh" }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: "1" }}
          >
            <img src="/assets/fatoArttLogo.png" alt="" />
            <div className="menu-list">
              <a href="#video">
                <h1>Çizim Videolarımız</h1>
              </a>
              <a href="#sec2">
                <h1>Fiyatlandırma</h1>
              </a>
              <a href="#hakkimizda">
                <h1>Hakkımızda</h1>
              </a>
            </div>
          </motion.div>
          <div onClick={menuTogglerHandler} className="hamburger">
            {active ? (
              <AiOutlineClose className="_icon" />
            ) : (
              <GiHamburgerMenu className="_icon" />
            )}
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}

export default Nav;
