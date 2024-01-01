export function getTeacherID(){
    
    return localStorage.getItem("teacherId");
}

export function Teacherlogout(){
    localStorage.removeItem("teacherId");
}


export function isTeacherAuthenticated(){
    return getTeacherID() ? true : false;
}

