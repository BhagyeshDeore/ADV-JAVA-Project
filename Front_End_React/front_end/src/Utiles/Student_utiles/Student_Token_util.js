export function getStudentID(){
    
    return localStorage.getItem("studentId");
}

export function Studentlogout(){
    localStorage.removeItem("studentId");
}

export function isStudentAuthenticated(){
    return getStudentID() ? true : false;
}
