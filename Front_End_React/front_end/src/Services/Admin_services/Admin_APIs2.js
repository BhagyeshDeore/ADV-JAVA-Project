import axios from "axios";

// export async function getContest(teacherId){
//     try{

//         const response = await axios.get(http://localhost:9090/teacher/get-contest-list?teacherId=${teacherId});
//         return response;

//     }catch(error){
//         console.log(error)
//         return error;
//     }

// }

 


 

export async function getStudentList(adminId){
  try{

      const response = await axios.get(`http://localhost:9090/admin/getStudentList?adminId=${adminId}`);
      return response;

  }catch(error){
      console.log(error)
      return error;
  }

}
export async function updateStudentStatus (studentId, status){
  try{

    //   const response = await axios.post('http://localhost:9090/admin/updateActiveStatusOfStudent',studentId, status);
    //   return response;
      const response = await axios.post(
      'http://localhost:9090/admin/updateActiveStatusOfStudent',
      { studentId, status }
    );
    return response;

  }catch(error){
      console.log(error)
      return error;
  }

}