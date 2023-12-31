import axios from "axios";



export async function loginTeacher(data){
    try{

        const response = await axios.post('http://localhost:9090/teacher/login',data);
        return response;

    }catch(error){
        console.log(error)
        return error;
    }

}


export async function getContest(teacherId){
    try{

        const response = await axios.get(`http://localhost:9090/teacher/get-contest-list?teacherId=${teacherId}`);
        return response;

    }catch(error){
        console.log(error)
        return error;
    }

}
