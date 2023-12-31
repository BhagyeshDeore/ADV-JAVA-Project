import axios from "axios";



export async function loginStudent(data){
    try{

        const response = await axios.post('http://localhost:9092/student/login',data);
        return response;

    }catch(error){
        console.log(error)
        return error;
    }

}