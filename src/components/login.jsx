import { Link , useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import ContextOrigin from "../context.jsx";
const  { Context } = ContextOrigin;

export default function Logins () {const { setSession, users } = useContext(Context);

const [user, setUser] = useState({});

const navigate = useNavigate();
const addUser = () => {
  const userExists =
    users.some((u) => u.email == user.email && u.password == user.password) ||
    true;
  if (userExists) {
    setSession(user);
    alert("Usuario identificado con éxito");
    navigate('/private/profileUser/:id_user');
  } else {
    alert("Email o contraseña incorrecta");
  }
};

return (
  <div className="vh-100 pt-5">
    <Form className="w-50 mx-auto border p-3 rounded bg-warning ">
      <div>
        <h5>Iniciar sesión</h5>
        <hr />
      </div>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={({ target }) =>
            setUser({ ...user, email: target.value })  
          }
          type="email"
          placeholder="name@example.com"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          onChange={({ target }) =>
          setUser({ ...user, password: target.value })
          }
          type="password"
          placeholder="******"
        />
      </Form.Group>

      <Button variant="success me-3" onClick={addUser}>
        Iniciar Sesión
      </Button>
      <Link to="/" className="text-decoration-none text-dark">
        <Button variant="light">Volver</Button>
      </Link>
    </Form>
  </div>
);
}