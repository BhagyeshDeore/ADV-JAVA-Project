import { Button, Col, Container, Row } from "react-bootstrap";
import { SHeader } from "./SHeader";
import { CodeEditor } from "./CodeEditor";
import { AHeader } from "../Admin_components/AHeader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getattemptProblem } from "../../Services/Student_services/Student_APIs";
import { SNavigationBar } from "./SNavigationBar";

export function S_AttemptProblem(props){

    const params = useParams();
    const [attemptProblem, setattemptProblem] = useState([]);

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