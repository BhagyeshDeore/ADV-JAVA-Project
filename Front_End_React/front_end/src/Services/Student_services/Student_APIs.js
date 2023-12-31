import axios from "axios";

export async function loginStudent(data) {
  try {
    const response = await axios.post(
      "http://localhost:9090/student/login",
      data
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getProblems(contestId){
  try{

      const response = await axios.get(`http://localhost:9090/contest/${contestId}/problems`);
      return response;

  }catch(error){
      console.log(error)
      return error;
  }

} 
