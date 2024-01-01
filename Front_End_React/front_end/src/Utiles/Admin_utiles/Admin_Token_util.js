export function getAdminID(){
    
    return localStorage.getItem("adminId");
}

export function Adminlogout(){
    localStorage.removeItem("adminId");
}


export function isAdminAuthenticated(){
    return getAdminID() ? true : false;
}
