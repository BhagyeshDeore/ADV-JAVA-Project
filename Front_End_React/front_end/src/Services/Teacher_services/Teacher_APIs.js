import axios from "axios";



export async function loginTeacher(data){
    try{

        const response = await axios.post('http://localhost:9090/teacher/login',data);
        console.log("Login response : ",response);
        return response;

    }catch(error){
        console.log(error)
    }

}
