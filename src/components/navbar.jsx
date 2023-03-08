import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="d-flex justify-content-between align-items-center px-3">
      <a href="/home">
      <img src="https://i.ibb.co/SRqvBYN/icon.jpg" alt="icon" border="0">
      </img>
      </a>
      <div className="d-flex align-items-center titulo">
        <h1>Optimum WEB</h1> 
        </div>
      <div className="opciones">
        <Link to="/login">
          <button className="btn btn-warning me-4 btn-lg">
            Iniciar Sesión
          </button>
        </Link>
        <Link to="/register">
          <button className="btn btn-success  btn-lg">Regístrate Aqui</button>
        </Link>
      </div>
    </nav>
  );
}