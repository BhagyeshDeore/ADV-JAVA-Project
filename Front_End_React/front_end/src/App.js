import "./App.css";
//importing bootstrap dependecy
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { S_Register } from "./Components/Student_components/S_Register";
import { S_Login } from "./Components/Student_components/S_Login";
import { S_DashBoard } from "./Components/Student_components/S_DashBoard";
//import { S_Contest } from "./Components/Student_components/S_Contest";
import S_Contest from "./Components/Student_components/S_Contest";
import { S_AttemptProblem } from "./Components/Student_components/S_AttemptProblem";
import { HomePage } from "./Components/HomePage";

import { A_Login } from "./Components/Admin_components/A_Login";
import { A_DashBoard } from "./Components/Admin_components/A_DashBoard";
import { A_CreateTeacherAccount } from "./Components/Admin_components/A_CreateTeacherAccount";
//import  { A_StudentsRegisterRequests }  from "./Components/Admin_components/A_StudentsRegisterRequests";
import A_StudentsRegisterRequests from "./Components/Admin_components/A_StudentsRegisterRequests";

import { T_Login } from "./Components/Teacher_components/T_Login";
import { T_DashBoard } from "./Components/Teacher_components/T_DashBoard";
import { T_CreateContest } from "./Components/Teacher_components/T_CreateContest";
import { T_SeeAttempts } from "./Components/Teacher_components/T_SeeAttempts";
import { T_UpdatePassword } from "./Components/Teacher_components/T_UpdatePassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/student-register" element={<S_Register />}></Route>
        <Route path="/student-login" element={<S_Login />}></Route>
        <Route path="/student-dashboard" element={<S_DashBoard />}></Route>
        <Route path="/student-seeContest" element={<S_Contest />}></Route>
        <Route path="/student-attemptProblem" element={<S_AttemptProblem />}></Route>

        <Route path="/admin-login" element={<A_Login />}></Route>
        <Route path="/admin-dashboard" element={<A_DashBoard />}></Route>
        <Route path="/admin-create-new-teacher-account" element={<A_CreateTeacherAccount />}></Route>
        <Route path="/admin-students-register-request" element={<A_StudentsRegisterRequests />}></Route>

        <Route path="/teacher-login" element={<T_Login />}></Route>
        <Route path="/teacher-dashboard" element={<T_DashBoard />}></Route>
        <Route path="/teacher-update-password"  element={<T_UpdatePassword />}  ></Route>
        <Route path="/teacher-create-contest"  element={<T_CreateContest />}  ></Route>
        <Route path="/teacher-see-attempts" element={<T_SeeAttempts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
