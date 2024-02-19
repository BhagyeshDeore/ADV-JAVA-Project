import { Navigate } from "react-router-dom";
import { isTeacherAuthenticated } from "../../Utiles/Teacher_utiles/Teacher_Token_util";

export function TPrivateRoute(props) {
  if (isTeacherAuthenticated()) {
    return <>{props.children}</>;
  }
    return <Navigate to="/teacher-login"></Navigate>;
}
