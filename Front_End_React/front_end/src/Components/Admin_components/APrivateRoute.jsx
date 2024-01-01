import { Navigate } from "react-router-dom";
import { isAdminAuthenticated } from "../../Utiles/Admin_utiles/Admin_Token_util";
export function APrivateRoute(props){
    if(isAdminAuthenticated()){
        return(
            <>{props.children}</>
        )
        }
       return(
            <Navigate to="/admin-login"></Navigate>
        );
}
