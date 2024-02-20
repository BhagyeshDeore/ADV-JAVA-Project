import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
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
    const [loading, setLoading] = useState(false); // Initialize loading state


    const[ resultMessage, setResultMessage] = useState("");
    const [formData, setFormData] = useState({
        code : `import java.util.Scanner;\n     
    class Solution{
        public static void main(String args[]){
            Scanner sc = new Scanner(System.in);
                
            //write your code here
        }
    }`,
        language: "Java" , 
        obtainedMarks:0,
        result: "",
        status : "",
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

    const submitAttempt = async () => {
        setLoading(true); // Set loading state to true when submitting
        try {
            await postOnAPI(); // Wait for the API call to finish
            
        } finally {
            setLoading(false); // Set loading state to false when API call finishes
        }
    };
    const postOnAPI = async ()=>{
        try{
             const result = await attemptProblem2(formData);
             console.log("from attempt problem api ",result.data);
             setOutput(result.data.output);
             setResultMessage(result.data.message);
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
                            <pre>{attemptProblem.explanation}</pre>

                            <h6>Input Format</h6>
                            <pre>
                            {attemptProblem.sampleInput}
                            </pre>

                            <h6>Output Format</h6>
                            <pre>
                                {attemptProblem.sampleOutput}
                            </pre>
                            {
                                (resultMessage == "Test-case passed and Accepted") ? 
                                ( <h5 style={{ color: "blue" }}>Submitted</h5> ):
                                (
                                    <Button variant="primary" onClick={submitAttempt} disabled={loading} id="run_button">
                                    {loading ? ( // Show loading spinner if loading, otherwise show "Submit"
                                        <Spinner animation="border" size="sm" role="status">
                                            <span className="sr-only"></span>
                                        </Spinner>
                                    ) : (
                                        
                                        "Run"
                                    )}
                                    </Button> 
                                )
                            }
                              
                            <h4 style={{ color: "green" }}>{resultMessage}</h4>                      
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