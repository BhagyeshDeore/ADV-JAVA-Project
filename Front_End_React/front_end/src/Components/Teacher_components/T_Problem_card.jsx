import { Row, Col, Button, Card, Container, Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { CodeEditor } from "../Teacher_components/CodeEditor";
import { editProblem } from "../../Services/Teacher_services/Teacher_APIs";
import { useNavigate } from "react-router-dom";
//import { useLocation } from "react-router-dom";

export function T_Problem_card(props) {

    const navigate = useNavigate();
    //const [localData, setLocalData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: props.title,
        problemStatement: props.problemStatement,
        explanation: props.explanation,
        sampleInput: props.sampleInput,
        sampleOutput: props.sampleOutput,
        testCase: props.testCase,
        resulTestCase: props.resulTestCase,
        marks: props.marks,
        solutionCode: props.solutionCode,
        difficultyLevel: props.difficulty,
        contestId: props.contestId,
        problemId: props.problemId
    });

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const updateCode = (val) => {
        setFormData((prevData) => ({
            ...prevData,
            solutionCode: val,
        }));
    };

    const handleSaveChanges = () => {
        const { contestId, problemId } = formData;
        const ContestId = parseInt(contestId);
        const ProblemId = parseInt(problemId);

        console.log("contestId:", ContestId);
        console.log("problemId:", problemId);

        if (isNaN(ContestId) || isNaN(ProblemId)) {
            console.error("Error: Contest ID or Problem ID is not a valid integer.");
            return;
        }

        editProblem(ContestId, ProblemId, formData)
            .then((data) => {
                console.log("Problem updated successfully:", data);
                handleCloseModal();

                setFormData(data); 
                props.getFromApi();
               // navigate(`/teacher-create-contest/${ContestId}`);
            
            })
            .catch((error) => {
                console.error("Error updating problem:", error);
            });
    };

    // useEffect(() => {
    //     setLocalData(props);
    // }, [props]);

    return (
        <>
            <Card className="mt-3" border="danger" text="muted">
                <Card.Header as="h5">Problem ID: {props.ID}</Card.Header>
                <Card.Body>
                    <Card.Title>Title: {props.title}</Card.Title>
                    <Card.Text>
                        <h6>Problem Statement:</h6>{props.problemStatement} <hr />
                        <h6>Difficulty Level: {props.difficulty}</h6>
                        <h6>Marks: {props.marks}</h6>
                    </Card.Text>
                    <Button variant="success" onClick={handleShowModal}>Edit Problem</Button>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Problem</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formTitle">
                                        <Form.Label>Problem Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter title"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formProblemStatement">
                                        <Form.Label>Problem Statement</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="problemStatement"
                                            value={formData.problemStatement}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formExplanation">
                                        <Form.Label>Problem Explanation</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            name="explanation"
                                            value={formData.explanation}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formSampleInput">
                                        <Form.Label>Sample Input</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={2}
                                            name="sampleInput"
                                            value={formData.sampleInput}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formSampleOutput">
                                        <Form.Label>Sample Output</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={2}
                                            name="sampleOutput"
                                            value={formData.sampleOutput}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formTestCase">
                                        <Form.Label>TestCases</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={2}
                                            name="testCase"
                                            value={formData.testCase}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formResultTestCase">
                                        <Form.Label>Expected Result of Testcases</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={2}
                                            name="resulTestCase"
                                            value={formData.resulTestCase}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formMarks">
                                        <Form.Label>Marks</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="marks"
                                            value={formData.marks}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col>
                                <h6>Add Solution Code</h6>
                                <CodeEditor
                                    solutionCode={formData.solutionCode}
                                    updateCode={updateCode}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
