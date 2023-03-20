import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

export default function CardsProfileUser() {
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState({});
  const { id_user } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/private/profileUser/${id_user}`
      );
      const data = await response.json();
      setCourses(data.courses);
      setUser(data.user);
    };
    fetchCourses();
  }, [id_user]);

  return (
    <>
      <h2>Cursos de </h2>
      {courses && courses.length > 0 ? (
        courses.map((course) => (
          <Card key={course.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={course.miniature} />
            <Card.Body>
              <Card.Title>{course.name_course}</Card.Title>
              <Card.Text>{course.description}</Card.Text>
              <Button
                variant="primary"
                onClick={() => navigate(`/private/course/${course.id}`)}
              >
                Ver curso
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No hay cursos disponibles para mostrar.</p>
      )}
    </>
  );
}

