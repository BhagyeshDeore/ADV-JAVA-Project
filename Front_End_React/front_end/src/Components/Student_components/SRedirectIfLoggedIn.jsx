import { Navigate, useNavigate } from "react-router-dom";
import { isStudentAuthenticated } from "../../Utiles/Student_utiles/Student_Token_util";

export function SRedirectIfLoggedIn(props){

    if(!isStudentAuthenticated()) return props.children;
    else {
        return(
            <Navigate to="/student-dashboard"></Navigate>
        );
    };
}

