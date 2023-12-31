import axios from "axios";


export async function getStudentContest(){
    try{

        const response = await axios.get("http://localhost:9090/student/dashboard");
        return response;
    }catch(error){
        console.log(error)
        return error;
    }
}
export async function loginStudent(data){
    try{

        const response = await axios.post('http://localhost:9090/student/login',data);

        return response;

    }catch(error){
        console.log(error)
        return error;
    }

}
