import React from "react";
import "./Sec2.scss";

function Sec2() {
  return (
    <div className="Sec2">
      <h1 className="price-title">Fiyatlar</h1>
      <div className="cards">
        <div className="card">
          <h1>35cm × 50cm</h1>
          <h2>Tek Kişi </h2>
          <h3>400₺</h3>
          <h2>İki Kişi </h2>
          <h3>450₺</h3>
        </div>
        <div className="card">
          <h1>50cm × 70cm</h1>
          <h2>Tek Kişi </h2>
          <h3>450₺</h3>
          <h2>İki Kişi </h2>
          <h3>500₺</h3>
        </div>
        <div className="card">
          <h1>A4</h1>
          <h2>Tek Kişi </h2>
          <h3>300₺</h3>
          <h2>İki Kişi </h2>
          <h3>350₺</h3>
        </div>
        <div className="card">
          <h1>A3</h1>
          <h2>Tek Kişi </h2>
          <h3>350₺</h3>
          <h2>İki Kişi </h2>
          <h3>400₺</h3>
        </div>
      </div>
    </div>
  );
}

export default Sec2;
