import { Button, Col, Container, Row } from "react-bootstrap";
import { SHeader } from "./SHeader";
import { CodeEditor } from "./CodeEditor";
import { AHeader } from "../Admin_components/AHeader";
import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import { getAttemptProblem } from "../../Services/Student_services/Student_APIs";
import axios from "axios";

export function S_AttemptProblem(props){
    const params = useParams();
   const [attemptP,setAttemptP]=useState({});

   const getProblemFromApi = async () => {
    try {
      const response = await axios.get(`http://localhost:9090/student-attemptProblem/${params.problemId}`);
      setAttemptP(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProblemFromApi();
  }, [params.problem_id]);


    return(
        <>
            <SHeader text="Student Attempt Problem Page"></SHeader>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <AHeader text={attemptP.title}></AHeader>
                            <hr></hr>
                            <h6>Difficulty : {attemptP.difficultyLevel}</h6>
                            <h5>Problem:</h5>
                            <p>{attemptP.problemStatement}</p>

                            <h5>Explanation:</h5>
                            <p>{attemptP.explanation}</p>

                            <h6>Input Format</h6>
                            <p>
                            {attemptP.sampleInput}
                            </p>

                            <h6>Output Format</h6>
                            <p>
                            {attemptP.sampleOutput}
                            </p>

                            <Button variant="primary">Submit</Button>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <CodeEditor/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}