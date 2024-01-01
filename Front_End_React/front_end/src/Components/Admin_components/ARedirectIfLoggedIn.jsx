import { isAdminAuthenticated } from "../../Utiles/Admin_utiles/Admin_Token_util";

export function ARedirectIfLoggedIn(props){
    if(!isAdminAuthenticated()) return props.children;
}

