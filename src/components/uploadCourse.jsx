import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import ContextOrigin from "../context.jsx";
const  { Context } = ContextOrigin;

export default function UploadCourse () {
    
      const { courses, setCourses } = useContext(Context);
      const [course, setCourse] = useState({
        nameCourse: "",
        description: "",
        PDF: ""
        });
    
      const navigate = useNavigate();
      const addCourse = () => {
     setCourses([...courses, course]);
     alert("Curso registrado");
     navigate("/profileAdmin");
      };
    
      return (
     <div className="vh-100 pt-5">
        <Form className="w-50 mx-auto border p-3 rounded bg-success text-white ">
          <div>
             <h5>Registrar curso</h5>
             <hr />
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Nombre del curso</Form.Label>
             <Form.Control
                onChange={({ target }) =>
                setCourse({ ...course, nameCourse: target.value })
                }
                type="text"
                placeholder="Curso de React"
             />
          </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>Descripción</Form.Label>
             <Form.Control
                onChange={({ target }) =>
                setCourse({ ...course, description: target.value })
                }
                type="text"
                placeholder="Curso de React"
             />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             <Form.Label>PDF</Form.Label>
             <Form.Control
                onChange={({ target }) =>
                setCourse({ ...course, PDF: target.value })            
                }
                type="text"
                placeholder="URL del PDF"
             />
          </Form.Group>
          <Button onClick={addCourse} variant="primary" type="submit">
             Registrar
          </Button>
        </Form>
     </div>
      );

}