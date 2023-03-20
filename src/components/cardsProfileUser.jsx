import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CardsProfileUser() {
  const [courses, setCourses] = useState([]);

  const navigate = useNavigate();


  return (
    <>
      {courses.map((course) => (
        <Card key={course.id}>
          <Card.Img variant="top" src={course.miniature} />
          <Card.Body>
            <Card.Title>{course.name_course}</Card.Title>
            <Card.Text>{course.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
