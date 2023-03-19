import { Link , useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import ContextOrigin from "../context.jsx";
const  { Context } = ContextOrigin;

export default function Register () {

  const { users, setUsers } = useContext(Context);
  const [user, setUser] = useState({
    nameUser: "",
    name: "",
    email: "",
    pasword: "",
  });

  const navigate = useNavigate();
  const addUser = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/public/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }); 
        if (response.status === 201){
        setUsers([...users, user]);
        alert("Usuario registrado");
        navigate("/public/login");
        }
        else {alert ("Usuario ya registrado")
        }
      } catch (error) {
        console.log (error)
        return error;
    };
  };
  return (
    <div className="vh-100 pt-5">
      <Form className="w-50 mx-auto border p-3 rounded bg-success text-white ">
        <div>
          <h5>Registrarse</h5>
          <hr />
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            onChange={({ target }) =>
            setUser({ ...user, name: target.value })
            }
            type="text"
            placeholder="Juan Juanito Perez Ramirez"
          />
        </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            onChange={({ target }) =>
            setUser({ ...user, nameUser: target.value })
            }
            type="text"
            placeholder="Juanito"
          />
        </Form.Group>
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

        <Button variant="warning me-3" onClick={addUser}>
          Registrarme
        </Button>
        <Link to="/" className="text-decoration-none text-dark">
          <Button variant="light">Volver</Button>
        </Link>
      </Form>
    </div>
  );
}