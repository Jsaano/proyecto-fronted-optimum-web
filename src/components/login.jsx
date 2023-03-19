import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ContextOrigin from "../context.jsx";
const { Context } = ContextOrigin;

const Login = () => {
  const { setSession } = useContext(Context);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/login`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.accessToken;
        setSession(accessToken);
        navigate(`/private/profileUser/${data.id_user}`);
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Error en el servidor");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="vh-100 pt-5">
      <Form
        className="w-50 mx-auto border p-3 rounded bg-warning"
        onSubmit={handleSubmit}
      >
        <div>
          <h5>Iniciar sesión</h5>
          <hr />
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="username"
            onChange={handleInputChange}
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="******"
          />
        </Form.Group>

        <Button variant="success me-3" type="submit">
          Iniciar Sesión
        </Button>
        <Link to="/" className="text-decoration-none text-dark">
          <Button variant="light">Volver</Button>
        </Link>
      </Form>
    </div>
  );
};

export default Login;
