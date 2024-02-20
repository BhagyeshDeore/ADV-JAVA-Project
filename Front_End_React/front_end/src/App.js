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
import { TPrivateRoute } from "./Components/Teacher_components/TPrivateRoute";
import { TRedirectIfLoggedIn } from "./Components/Teacher_components/TRedirectIfLoggedIn";
import { SRedirectIfLoggedIn } from "./Components/Student_components/SRedirectIfLoggedIn";
import { SPrivateRoute } from "./Components/Student_components/SPrivateRoute";
import AboutUs from "./Components/About_us";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route
          path="/student-register"
          element={
            <SRedirectIfLoggedIn>
              <S_Register />
            </SRedirectIfLoggedIn>
          }
        ></Route>
        <Route
          path="/student-login"
          element={
            <SRedirectIfLoggedIn>
              <S_Login />
            </SRedirectIfLoggedIn>
          }
        ></Route>
        <Route
          path="/student-dashboard"
          element={
            <SPrivateRoute>
              <S_DashBoard />
            </SPrivateRoute>
          }
        ></Route>
        <Route
          path="/student-seeContest/:contest_id"
          element={
            <SPrivateRoute>
              <S_Contest />
            </SPrivateRoute>
          }
        ></Route>
        <Route
          path="/student-attemptProblem/:contest_id/:problem_id"
          element={
            <SPrivateRoute>
              <S_AttemptProblem />
            </SPrivateRoute>
          }
        ></Route>

        <Route path="/admin-login" element={<A_Login />}></Route>
        <Route path="/admin-dashboard" element={<A_DashBoard />}></Route>
        <Route
          path="/admin-create-new-teacher-account"
          element={<A_CreateTeacherAccount />}
        ></Route>
        <Route
          path="/admin-students-register-request"
          element={<A_StudentsRegisterRequests />}
        ></Route>
        {/* 
        <Route
          path="/teacher-login"
          element={
            <TRedirectIfLoggedIn>
              <T_Login />
            </TRedirectIfLoggedIn>
          }
        ></Route> */}

        <Route path="/teacher-login" element={<T_Login />}></Route>
        <Route
          path="/teacher-dashboard"
          element={
            <TPrivateRoute>
              <T_DashBoard />
            </TPrivateRoute>
          }
        ></Route>
        <Route
          path="/teacher-update-password"
          element={
            <TPrivateRoute>
              <T_UpdatePassword />
            </TPrivateRoute>
          }
        ></Route>
        <Route
          path="/teacher-create-contest/:contest_id"
          element={
            <TPrivateRoute>
              <T_CreateContest />
            </TPrivateRoute>
          }
        ></Route>
        <Route
          path="/teacher-see-attempts/:contest_id"
          element={
            <TPrivateRoute>
              <T_SeeAttempts />
            </TPrivateRoute>
          }
        ></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//admin
//viraj@gmail.com
//vir123

//student
//virajtandel72@gmail.com
//vir123

//teacher
//virajtandel72@gmail.com
//new123
