import { isTeacherAuthenticated } from "../../Utiles/Teacher_utiles/Teacher_Token_util";

export function TRedirectIfLoggedIn(props){
    if(!isTeacherAuthenticated()) return props.children;
}

