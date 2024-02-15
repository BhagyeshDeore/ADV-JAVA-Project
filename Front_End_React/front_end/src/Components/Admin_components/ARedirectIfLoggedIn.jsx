import { Navigate } from "react-router-dom";
import { isAdminAuthenticated } from "../../Utiles/Admin_utiles/Admin_Token_util";

export function ARedirectIfLoggedIn(props){
    if(!isAdminAuthenticated()) return props.children;
    else {
        return(
            <Navigate to="/teacher-dashboard"></Navigate>
        );
    };
}

