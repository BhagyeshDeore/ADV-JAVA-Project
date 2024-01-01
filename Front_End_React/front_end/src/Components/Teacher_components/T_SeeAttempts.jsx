import { useEffect, useState } from "react";
import { Table , Alert } from "react-bootstrap";
import { TNavigationBar } from "./TNavigationBar";
import { getattempts } from "../../Services/Teacher_services/Teacher_APIs";
import { useParams } from "react-router-dom";


export function T_SeeAttempts(props){
    
  const params = useParams();
    const [attempts,setAttempt]=useState([]);

    const getFromApi = async ()=>{
      try{
           const result = await getattempts(params.contest_id);
           console.log(result.data);
           setAttempt(result.data);
           
      }catch(error){
          setAttempt([]);
         console.log("from api",error.data)
      }
   }

   useEffect(()=>{
    getFromApi();
    },[]);

    return (
      <>
        <TNavigationBar/>
        <div>
        <Alert key="dark" variant="secondary" className="text-center">
          <h3>Attempts By Students </h3>
        </Alert>
          <Table striped bordered hover className="text-center" responsive  variant="light">
            <thead >
              <tr  >
                <th>#</th>
                <th>Attempt ID</th>
                <th>Student Name</th>
                <th>Contest Title</th>
                <th>Problem Title</th>
                <th>Code</th>
                <th>Language</th>
                <th>Status</th>
                <th>Result</th>
                <th>Obtained Marks</th>
              </tr>
            </thead>
            <tbody>
              {attempts.map((attempt, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{attempt.attemptId}</td>
                  <td>{attempt.student.name}</td>
                  <td>{attempt.contest.title}</td>
                  <td>{attempt.problem.title}</td>
                  <td>{attempt.code}</td>
                  <td>{attempt.language}</td>
                  <td>{attempt.status}</td>
                  <td>{attempt.result}</td>
                  <td>{attempt.obtained_marks}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
      );
}





























// {
//   "attemptId" : 1, 
//   "studentId" : 2,
//   "contestId" : 23,
//   "problemId" : 2,
//   "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
//   "language" : "JAVA",
//   "status" : "SOLVED",
//   "result" : "123",
//   "obtained_marks" : 10
// },
// {
//   "attemptId" : 2, 
//   "studentId" : 3,
//   "contestId" : 23,
//   "problemId" : 2,
//   "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
//   "language" : "JAVA",
//   "status" : "SOLVED",
//   "result" : "123",
//   "obtained_marks" : 10
// },
// {
//   "attemptId" : 3, 
//   "studentId" : 5,
//   "contestId" : 23,
//   "problemId" : 2,
//   "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
//   "language" : "JAVA",
//   "status" : "SOLVED",
//   "result" : "123",
//   "obtained_marks" : 10
// },
// {
//   "attemptId" : 4, 
//   "studentId" : 2,
//   "contestId" : 23,
//   "problemId" : 2,
//   "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
//   "language" : "JAVA",
//   "status" : "SOLVED",
//   "result" : "123",
//   "obtained_marks" : 10
// },
// {
//   "attemptId" : 1, 
//   "studentId" : 2,
//   "contestId" : 23,
//   "problemId" : 2,
//   "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
//   "language" : "JAVA",
//   "status" : "SOLVED",
//   "result" : "123",
//   "obtained_marks" : 10
// },
// {
//   "attemptId" : 1, 
//   "studentId" : 2,
//   "contestId" : 23,
//   "problemId" : 2,
//   "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
//   "language" : "JAVA",
//   "status" : "SOLVED",
//   "result" : "123",
//   "obtained_marks" : 10
// },{
//   "attemptId" : 1, 
//   "studentId" : 2,
//   "contestId" : 23,
//   "problemId" : 2,
//   "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
//   "language" : "JAVA",
//   "status" : "SOLVED",
//   "result" : "123",
//   "obtained_marks" : 10
// },
// {
//   "attemptId" : 1, 
//   "studentId" : 2,
//   "contestId" : 23,
//   "problemId" : 2,
//   "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
//   "language" : "JAVA",
//   "status" : "SOLVED",
//   "result" : "123",
//   "obtained_marks" : 10
// },
// {
//   "attemptId" : 2, 
//   "studentId" : 3,
//   "contestId" : 23,
//   "problemId" : 2,
//   "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
//   "language" : "JAVA",
//   "status" : "SOLVED",
//   "result" : "123",
//   "obtained_marks" : 10
// },
// {
//   "attemptId" : 3, 
//   "studentId" : 5,
//   "contestId" : 23,
//   "problemId" : 2,
//   "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
//   "language" : "JAVA",
//   "status" : "SOLVED",
//   "result" : "123",
//   "obtained_marks" : 10
// },
// {
//   "attemptId" : 4, 
//   "studentId" : 2,
//   "contestId" : 23,
//   "problemId" : 2,
//   "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
//   "language" : "JAVA",
//   "status" : "SOLVED",
//   "result" : "123",
//   "obtained_marks" : 10
// },
// {
//   "attemptId" : 1, 
//   "studentId" : 2,
//   "contestId" : 23,
//   "problemId" : 2,
//   "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
//   "language" : "JAVA",
//   "status" : "SOLVED",
//   "result" : "123",
//   "obtained_marks" : 10
// },
// {
//   "attemptId" : 1, 
//   "studentId" : 2,
//   "contestId" : 23,
//   "problemId" : 2,
//   "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
//   "language" : "JAVA",
//   "status" : "SOLVED",
//   "result" : "123",
//   "obtained_marks" : 10
// },{
//   "attemptId" : 1, 
//   "studentId" : 2,
//   "contestId" : 23,
//   "problemId" : 2,
//   "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
//   "language" : "JAVA",
//   "status" : "SOLVED",
//   "result" : "123",
//   "obtained_marks" : 10
// }