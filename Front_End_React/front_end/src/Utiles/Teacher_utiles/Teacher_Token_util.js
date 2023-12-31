export function getTeacherID(){
    
    return localStorage.getItem("teacherId");
}

export function Teacherlogout(){
    localStorage.removeItem("teacherId");
}