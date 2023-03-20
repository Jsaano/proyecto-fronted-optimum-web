import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CardsProfileUser() {
  const [courses, setCourses] = useState([]);
  const { id_user } = useParams();
  const navigate = useNavigate();

  // no se si ocupar este metodo para llamar y obtener las cosas del API, ya llega el parametro del usuario sin problemas
  // borra esto si sabes como hacerlo o mostrar las cosas, asi a la rapida se debe hacer una llamada al API con lo que necesitas
  // guardar, y luego mostrarlo.
  useEffect(async () => {
    console.log(id_user);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/private/profileUser/${id_user}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      if (response.status === 201) {
        
      }
    } catch (error) { 
      console.log(error);
      alert("Error en el servidor");
    }
  })

  return (
    <>
      {courses.map((course) => (
        <Card key={course.id}>
          <Card.Img variant="top" src={course.miniature} />
          <Card.Body>
            console.log(id_user);
            <Card.Title>{course.name_course}</Card.Title>
            <Card.Text>{course.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
