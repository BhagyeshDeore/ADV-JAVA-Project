import { useState } from "react";
import { Table , Alert } from "react-bootstrap";


export function T_SeeAttempts(props){
    
    const [attempt,setAttempt]=useState([
        {
            "attemptId" : 1, 
            "studentId" : 2,
            "contestId" : 23,
            "problemId" : 2,
            "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
            "language" : "JAVA",
            "status" : "SOLVED",
            "result" : "123",
            "obtained_marks" : 10
          },
          {
            "attemptId" : 2, 
            "studentId" : 3,
            "contestId" : 23,
            "problemId" : 2,
            "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
            "language" : "JAVA",
            "status" : "SOLVED",
            "result" : "123",
            "obtained_marks" : 10
          },
          {
            "attemptId" : 3, 
            "studentId" : 5,
            "contestId" : 23,
            "problemId" : 2,
            "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
            "language" : "JAVA",
            "status" : "SOLVED",
            "result" : "123",
            "obtained_marks" : 10
          },
          {
            "attemptId" : 4, 
            "studentId" : 2,
            "contestId" : 23,
            "problemId" : 2,
            "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
            "language" : "JAVA",
            "status" : "SOLVED",
            "result" : "123",
            "obtained_marks" : 10
          },
          {
            "attemptId" : 1, 
            "studentId" : 2,
            "contestId" : 23,
            "problemId" : 2,
            "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
            "language" : "JAVA",
            "status" : "SOLVED",
            "result" : "123",
            "obtained_marks" : 10
          },
          {
            "attemptId" : 1, 
            "studentId" : 2,
            "contestId" : 23,
            "problemId" : 2,
            "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
            "language" : "JAVA",
            "status" : "SOLVED",
            "result" : "123",
            "obtained_marks" : 10
          },{
            "attemptId" : 1, 
            "studentId" : 2,
            "contestId" : 23,
            "problemId" : 2,
            "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
            "language" : "JAVA",
            "status" : "SOLVED",
            "result" : "123",
            "obtained_marks" : 10
          },
          {
            "attemptId" : 1, 
            "studentId" : 2,
            "contestId" : 23,
            "problemId" : 2,
            "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
            "language" : "JAVA",
            "status" : "SOLVED",
            "result" : "123",
            "obtained_marks" : 10
          },
          {
            "attemptId" : 2, 
            "studentId" : 3,
            "contestId" : 23,
            "problemId" : 2,
            "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
            "language" : "JAVA",
            "status" : "SOLVED",
            "result" : "123",
            "obtained_marks" : 10
          },
          {
            "attemptId" : 3, 
            "studentId" : 5,
            "contestId" : 23,
            "problemId" : 2,
            "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
            "language" : "JAVA",
            "status" : "SOLVED",
            "result" : "123",
            "obtained_marks" : 10
          },
          {
            "attemptId" : 4, 
            "studentId" : 2,
            "contestId" : 23,
            "problemId" : 2,
            "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
            "language" : "JAVA",
            "status" : "SOLVED",
            "result" : "123",
            "obtained_marks" : 10
          },
          {
            "attemptId" : 1, 
            "studentId" : 2,
            "contestId" : 23,
            "problemId" : 2,
            "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
            "language" : "JAVA",
            "status" : "SOLVED",
            "result" : "123",
            "obtained_marks" : 10
          },
          {
            "attemptId" : 1, 
            "studentId" : 2,
            "contestId" : 23,
            "problemId" : 2,
            "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
            "language" : "JAVA",
            "status" : "SOLVED",
            "result" : "123",
            "obtained_marks" : 10
          },{
            "attemptId" : 1, 
            "studentId" : 2,
            "contestId" : 23,
            "problemId" : 2,
            "code" : "public class Main {  public static void main(String[] args) {    System.out.println(123);  }}",
            "language" : "JAVA",
            "status" : "SOLVED",
            "result" : "123",
            "obtained_marks" : 10
          }
    ]);

    return (
        <div>
        <Alert key="dark" variant="secondary" className="text-center">
          <h3>Attempts By Students </h3>
        </Alert>
          <Table striped bordered hover className="text-center" responsive  variant="light">
            <thead >
              <tr  >
                <th>#</th>
                <th>Attempt ID</th>
                <th>Student ID</th>
                <th>Contest ID</th>
                <th>Problem ID</th>
                <th>Code</th>
                <th>Language</th>
                <th>Status</th>
                <th>Result</th>
                <th>Obtained Marks</th>
              </tr>
            </thead>
            <tbody>
              {attempt.map((attempt, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{attempt.attemptId}</td>
                  <td>{attempt.studentId}</td>
                  <td>{attempt.contestId}</td>
                  <td>{attempt.problemId}</td>
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
      );
}