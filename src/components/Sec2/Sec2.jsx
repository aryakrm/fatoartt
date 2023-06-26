import React from "react";
import "./Sec2.scss";

function Sec2() {
  return (
    <div className="Sec2" id="sec2">
      <h1 className="price-title">Fiyatlar</h1>
      <div className="cards">
        <div className="card">
          <h1>35cm × 50cm</h1>
          <h2>Tek Kişi </h2>
          <h1>400₺</h1>
          <h2>İki Kişi </h2>
          <h1>450₺</h1>
        </div>
        <div className="card">
          <h1>50cm × 70cm</h1>
          <h2>Tek Kişi </h2>
          <h1>450₺</h1>
          <h2>İki Kişi </h2>
          <h1>500₺</h1>
        </div>
        <div className="card">
          <h1>A4</h1>
          <h2>Tek Kişi </h2>
          <h1>300₺</h1>
          <h2>İki Kişi </h2>
          <h1>350₺</h1>
        </div>
        <div className="card">
          <h1>A3</h1>
          <h2>Tek Kişi </h2>
          <h1>350₺</h1>
          <h2>İki Kişi </h2>
          <h1>400₺</h1>
        </div>
      </div>
      <h2 style={{ marginTop: "2rem" }}>
        *Türkiyenin her yerine kargo bedava.
      </h2>
      <p>
        *Farklı fotoğraflardan birleştirme çizimler Talep eden müşterimizlerimiz
        için çizimin hızlandırılmış video çekimini yapiyoruz
      </p>
    </div>
  );
}

export default Sec2;
