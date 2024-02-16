import { Navigate } from "react-router-dom";
import { isTeacherAuthenticated } from "../../Utiles/Teacher_utiles/Teacher_Token_util";

export function TRedirectIfLoggedIn(props){
    if(!isTeacherAuthenticated()) return props.children;
    else {
        return(
            <Navigate to="/teacher-dashboard"></Navigate>
        );
    };
}

