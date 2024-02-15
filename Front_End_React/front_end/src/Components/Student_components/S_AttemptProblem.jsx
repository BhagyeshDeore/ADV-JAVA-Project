import { Button, Col, Container, Row } from "react-bootstrap";
import { SHeader } from "./SHeader";
import { CodeEditor } from "./CodeEditor";
import { AHeader } from "../Admin_components/AHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getattemptProblem , attemptProblem2 } from "../../Services/Student_services/Student_APIs";
import { SNavigationBar } from "./SNavigationBar";
import { getStudentID } from "../../Utiles/Student_utiles/Student_Token_util";
import JavaCodeOutput from "./JavaCodeOutput";

export function S_AttemptProblem(props){

    const params = useParams();
    const [attemptProblem, setattemptProblem] = useState([]);
    const navigate = useNavigate();
    const [output, setOutput] = useState('');

    const [formData, setFormData] = useState({
        code : `import java.util.Scanner;\n     
    class Solution{
        public static void main(String args[]){
            Scanner sc = new Scanner(System.in);
                
            //write your code here
        }
    }`,
        language: "Java" , 
        obtainedMarks:10,
        result: "",
        status : "Incorrect",
        contestId : params.contest_id,
        problemId : params.problem_id,
        studentId: getStudentID()
    })

    const updateCode = (val) =>{
        console.log(val);
        setFormData((prevData) => ({
            ...prevData,
            code: val,
            }));
        console.log(formData)
    }

    const submitAttempt = ()=>{
        postOnAPI();
    }

    const postOnAPI = async ()=>{
        try{
             const result = await attemptProblem2(formData);
             console.log("from attempt problem api ",result.data);
             setOutput(result.data.output);
             //navigate(`/student-seeContest/${params.contest_id}`)

        }catch(error){
          
           console.log("from attempt problem",error)
        }
     }


    const getFromApi = async () => {
        try {
          const result = await getattemptProblem(params.problem_id);
          console.log(result.data);
          setattemptProblem(result.data);
        } catch (error) {
          setattemptProblem([]);
          console.log("from api", error.data);
        }
      };

      useEffect(() => {
        getFromApi();
      }, []);

    return(
        <>
            <SNavigationBar/>
            <SHeader text="Student Attempt Problem Page"></SHeader>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <AHeader text={attemptProblem.title}></AHeader>
                            <hr></hr>
                            <h6>Difficulty: {attemptProblem.difficultyLevel}</h6>
                            <h5>Problem:</h5>
                            <p>{attemptProblem.problemStatement}</p>

                            <h5>Explanation:</h5>
                            <p>{attemptProblem.explanation}</p>

                            <h6>Input Format</h6>
                            <p>
                            {attemptProblem.sampleInput}
                            </p>

                            <h6>Output Format</h6>
                            <p>
                                {attemptProblem.sampleOutput}
                            </p>

                            <Button variant="primary" onClick={submitAttempt}>Submit</Button>
                        </div>
                        <div>
                            <SHeader text="Java Code Execution Results"></SHeader>
                            <JavaCodeOutput output={output} />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <CodeEditor
                            solutionCode={formData.code}  
                            updateCode={updateCode}/>
                        </div>
                       
                    </Col>
                </Row>
            </Container>
        </>
    )
}