import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

export default function CardsProfileUser({ courses, user }) {
  const navigate = useNavigate();
  const [id, setId] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/private/profileUser/${id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (id_course) => {
    navigate(`/private/profileUser/${user}/course/${id_course}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setId(e.target.value)} />
        <button type="submit">Buscar usuario</button>
      </form>
      {courses && courses.length > 0 && courses.map((course, index) => (
        <Card className="m-3" style={{ width: "18rem" }} key={index}>
          <Card.Img variant="top" src={course.miniature} />
          <Card.Body>
            <Card.Title>{course.name_course}</Card.Title>
            <Card.Text>{course.description}</Card.Text>
            <Button variant="primary" onClick={() => handleClick(course.id)}>
              Ir al curso
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
