import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "./context.jsx";

import Home from "./views/home.jsx";
import Register from "./views/register.jsx";
import Login from "./views/login.jsx";
import ProfileUser from "./views/profileUser.jsx";
import ProfileAdmin from "./views/profileAdmin.jsx";
import UserCourse from "./views/userCourse";

const { Provider } = Context;


export default function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Context />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profileUser" element={<ProfileUser/>} />
            <Route path="/profileAdmin" element={<ProfileAdmin/>} />
            <Route path="/userCourse" element={<UserCourse/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
} 


