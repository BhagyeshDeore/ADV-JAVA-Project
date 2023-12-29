import { Button, Col, Container, Row } from "react-bootstrap";
import { SHeader } from "./SHeader";
import { CodeEditor } from "./CodeEditor";
import { AHeader } from "../Admin_components/AHeader";

export function S_AttemptProblem(props){

   

    return(
        <>
            <SHeader text="Student Attempt Problem Page"></SHeader>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <AHeader text="Smallest Greatest Element"></AHeader>
                            <hr></hr>
                            <h6>Difficulty : HARD</h6>
                            <h5>Problem:</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestias corporis praesentium velit similique rem alias dolor ratione, obcaecati, soluta unde enim veniam dicta et! Voluptatibus officiis perferendis et culpa?</p>

                            <h5>Explanation:</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestias corporis praesentium velit similique rem alias dolor ratione, obcaecati, soluta unde enim veniam dicta et! Voluptatibus officiis perferendis et culpa?</p>

                            <h6>Input Format</h6>
                            <p>
                                2
                                2
                                3
                            </p>

                            <h6>Output Format</h6>
                            <p>
                                1000
                                2000
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