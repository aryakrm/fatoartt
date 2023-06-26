import React from "react";
import "./Hakkimizda.scss";

function Hakkimizda() {
  return (
    <div className="Hakkimizda" id="hakkimizda">
      <h1 style={{ marginBottom: "2rem" }}>Çizim Videolarımız</h1>
      <video id="video" autoPlay muted src="/assets/fato.mp4" controls></video>
      <h1 id="hakkimizda">Hakkımızda</h1>
      <p>Ben Özden Söğüt profesyonel ve realist çizimler yapıyorum :)</p>
    </div>
  );
}

export default Hakkimizda;
