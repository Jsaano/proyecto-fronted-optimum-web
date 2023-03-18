import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardsProfileUser({ courses }) {
  const navigate = useNavigate();

  const handleClick = (id_course) => {
    navigate(`/private/profileUser/:id_user/course/${id_course}`);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {courses.map((course, index) => (
        <Card className="m-3" style={{ width: "18rem" }} key={index}>
          <Card.Img variant="top" src={course.miniature} />
          <Card.Body>
            <Card.Title>{course.name_course}</Card.Title>
            <Card.Text>{course.description}</Card.Text>
            <Button
              variant="primary"
              onClick={() => handleClick(course.id)}
            >
              Ir al curso
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
