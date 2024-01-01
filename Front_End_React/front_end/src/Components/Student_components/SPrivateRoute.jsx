import { isStudentAuthenticated } from "../../Utiles/Student_utiles/Student_Token_util";
import { Navigate } from "react-router-dom";
export function SPrivateRoute(props){
    if(isStudentAuthenticated()){
        return(
            <>{props.children}</>
        )
        }
       return(
            <Navigate to="/student-login"></Navigate>
        );
}
