import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <img
              src="https://i.ibb.co/kXThS6F/Icon2.jpg"
              alt="Logo de la empresa"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h4>Contacto</h4>
            <ul>
              <li>Correo electrónico: contacto@empresa.com</li>
              <li>Redes sociales:</li>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Dirección</h4>
            <p>Providencia 123 <br />Ciudad, Estado, Código Postal</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
