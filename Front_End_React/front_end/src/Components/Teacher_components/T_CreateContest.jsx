import { Button, Col, Container, Dropdown, DropdownButton, Form, Modal, Row } from "react-bootstrap";
import { THeader } from "./THeader";
import { T_Problem_card } from "./T_Problem_card";
import { useEffect, useState } from "react";
import { CodeEditor } from "../Teacher_components/CodeEditor";
import { createProblem, getProblems } from "../../Services/Teacher_services/Teacher_APIs";
import { useParams } from "react-router-dom";
import { TNavigationBar } from "./TNavigationBar";

export function T_CreateContest(props){

    const params = useParams();
    const [show, setShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('EASY');

    const[formData, setFormData] = useState({
        title: "",
        problemStatement: "",
        explanation: "",
        difficultyLevel: selectedCategory,
        marks: 0,
        sampleInput: "",
        sampleOutput: "",
        testCase: "",
        resulTestCase: "",
        solutionCode: "hello code",
        contestId : params.contest_id})


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[problemList, setProblemList] = useState( []);

    const getFromApi = async ()=>{
        try{
             const result = await getProblems(params.contest_id);
             console.log(result.data);
             setProblemList(result.data);
             
        }catch(error){
            setProblemList([]);
           console.log("from api",error.data)
        }
     }

     useEffect(()=>{
        getFromApi();
    },[]);


    const handleAdd = async () => {
        if(formData.title == ""){
            alert("enter Title");
            return ;
        }
        if(formData.description == ""){
            alert("enter Description");
            return ;
        }
        setFormData((prevData) => ({
            ...prevData,
            ["difficultyLevel"]: selectedCategory,
            }));
        console.log(formData)
        await postOnAPI();
        getFromApi();

        setFormData({
            title: "",
            problemStatement: "",
            explanation: "",
            difficultyLevel: selectedCategory,
            marks: 0,
            sampleInput: "",
            sampleOutput: "",
            testCase: "",
            resulTestCase: "",
            solutionCode: "hello code",
            contestId : params.contest_id});
        setShow(false);   
    };
    

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
        //updates the formData state with the new values and clears any validation errors for the corresponding field
        setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
        }));

        console.log( formData );
    };

    const postOnAPI = async ()=>{
        try{
             const result = await createProblem(formData);
             console.log("from create contest api ",result.data);
        }catch(error){
          
           console.log("from Login api",error)
        }
     }


    return(
        <>
            <TNavigationBar/>
            <THeader text="Teacher Create Contest Page"></THeader>


            <Container>
                <Button variant="primary" size="lg" onClick={handleShow}>
                    Add New Problem
                </Button>
                <Row xs={1} md={1} className="g-4">
                    {problemList.map((element) => (
                        <Col key={element.problemId}> 
                            <T_Problem_card title={element.title} 
                                problemStatement={element.problemStatement} 
                                difficulty={element.difficultyLevel}
                                ID={element.problemId}
                                marks={element.marks}>
                            </T_Problem_card>
                        </Col>
                    ))}
                </Row>
            </Container>





            {/* Modal for adding problem  */}


            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                size="xl"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Add Problem
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Container>
                            <Row>
                                <Col>


                                <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Problem Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Add Title here..."
                                            autoFocus
                                            required
                                            name="title"
                                            requiredname="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            isInvalid={!!errors.title}
                                        />
                                        </Form.Group>

                                        <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                        >
                                        <Form.Label>Probelm Statement</Form.Label>
                                        <Form.Control
                                            name="problemStatement"
                                            requiredname="problemStatement"
                                            value={formData.problemStatement}
                                            onChange={handleChange}
                                            isInvalid={!!errors.problemStatement} as="textarea" rows={3} />
                                        </Form.Group>

                                        <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea2"
                                        >
                                        <Form.Label>Problem Explanation</Form.Label>
                                        <Form.Control 
                                            name="explanation"
                                            requiredname="explanation"
                                            value={formData.explanation}
                                            onChange={handleChange}
                                            isInvalid={!!errors.explanation} as="textarea" rows={4} />
                                        </Form.Group>


                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="exampleForm.ControlTextarea2"
                                                        >
                                                        <Form.Label>Sample Input</Form.Label>
                                                        <Form.Control 
                                                        name="sampleInput"
                                                        requiredname="sampleInput"
                                                        value={formData.sampleInput}
                                                        onChange={handleChange}
                                                        isInvalid={!!errors.sampleInput}
                                                        as="textarea" rows={2} />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group
                                                    className="mb-3"
                                                    controlId="exampleForm.ControlTextarea1"
                                                    >
                                                    <Form.Label>Sample Output</Form.Label>
                                                    <Form.Control
                                                    name="sampleOutput"
                                                    requiredname="sampleOutput"
                                                    value={formData.sampleOutput}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.sampleOutput} as="textarea" rows={2} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="exampleForm.ControlTextarea2"
                                                        >
                                                        <Form.Label>TestCases </Form.Label>
                                                        <Form.Control
                                                        name="testCase"
                                                        requiredname="testCase"
                                                        value={formData.testCase}
                                                        onChange={handleChange}
                                                        isInvalid={!!errors.testCase}
                                                         as="textarea" rows={2} />
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group
                                                    className="mb-3"
                                                    controlId="exampleForm.ControlTextarea1"
                                                    >
                                                    <Form.Label>Expected Result of Testcases</Form.Label>
                                                    <Form.Control
                                                    name="resulTestCase"
                                                    requiredname="resulTestCase"
                                                    value={formData.resulTestCase}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.resulTestCase}
                                                     as="textarea" rows={2} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlTextarea1"
                                                >
                                                <Form.Label>Marks</Form.Label>
                                                <Form.Control
                                                name="marks"
                                                type="number"
                                                requiredname="marks"
                                                value={formData.marks}
                                                onChange={handleChange}
                                                isInvalid={!!errors.marks}
                                                    rows={2} />
                                                </Form.Group>
                                        </Container>

                                        <div className="d-flex justify-content-center align-items-center pe-5">
                                            <DropdownButton
                                                title={`LEVEL ${selectedCategory}`}
                                                onSelect={(eventKey) => setSelectedCategory(eventKey)}>
                                                <Dropdown.Item eventKey="EASY">EASY</Dropdown.Item>
                                                <Dropdown.Item eventKey="MEDIUM">MEDIUM</Dropdown.Item>
                                                <Dropdown.Item eventKey="HARD">HARD</Dropdown.Item>
                                            </DropdownButton>
                                        </div>
                                    </Form>


                                </Col>
                                <Col>
                                    <h6>Add Solution Code</h6>
                                    <CodeEditor name="solutionCode"
                                                requiredname="solutionCode"
                                                value={formData.solutionCode}
                                                onChange={handleChange}
                                                isInvalid={!!errors.solutionCode}
                                                solutionCode={formData.solutionCode}  
                                                >

                                    </CodeEditor>
                                </Col>
                            </Row>
                        </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        Add Problem
                    </Button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}


































    // const problemList = [{
    //     "problem_id" : 1 ,
    //     "contest_id" : 1,
    //     "title" : "java-if-else",
    //     "problem_statement" : "In this challenge, we test your knowledge of using if-else conditional statements to automate decision-making processes.",
    //     "explanation" : "Given an integer,  , perform the following conditional actions:      If   is odd, print Weird If is even and in the inclusive range of to , print Not Weird If is even and in the inclusive range of to , print Weird If is even and greater than      , print Not Weird  Complete the stub code provided in your editor to print whether or not is weird.",
    //     "difficulty_level" : "HARD",
    //     "marks" : 10,
    //     "sample_input" : "3" ,
    //     "sample_output" : "Weired" ,
    //     "test_case" : "24" ,
    //     "result_test_case" : "Not weird" ,
    //     "solution_code" : "import java.io.*; import java.math.*; import java.security.*; import java.text.*; import java.util.*; import java.util.concurrent.*; import java.util.regex.*;  public class Solution {        private static final Scanner scanner = new Scanner(System.in);      public static void main(String[] args) {         int N = scanner.nextInt();                   scanner.close();     } } "
    
    //   },
    //   {
    //     "problem_id" : 2 ,
    //     "contest_id" : 1,
    //     "title" : "java-if-else",
    //     "problem_statement" : "In this challenge, we test your knowledge of using if-else conditional statements to automate decision-making processes.",
    //     "explanation" : "Given an integer,  , perform the following conditional actions:      If   is odd, print Weird If is even and in the inclusive range of to , print Not Weird If is even and in the inclusive range of to , print Weird If is even and greater than      , print Not Weird  Complete the stub code provided in your editor to print whether or not is weird.",
    //     "difficulty_level" : "MEDIUM",
    //     "marks" : 10,
    //     "sample_input" : "3" ,
    //     "sample_output" : "Weired" ,
    //     "test_case" : "24" ,
    //     "result_test_case" : "Not weird" ,
    //     "solution_code" : "import java.io.*; import java.math.*; import java.security.*; import java.text.*; import java.util.*; import java.util.concurrent.*; import java.util.regex.*;  public class Solution {        private static final Scanner scanner = new Scanner(System.in);      public static void main(String[] args) {         int N = scanner.nextInt();                   scanner.close();     } } "
    
    //   },{
    //     "problem_id" : 3 ,
    //     "contest_id" : 1,
    //     "title" : "java-if-else",
    //     "problem_statement" : "In this challenge, we test your knowledge of using if-else conditional statements to automate decision-making processes.",
    //     "explanation" : "Given an integer,  , perform the following conditional actions:      If   is odd, print Weird If is even and in the inclusive range of to , print Not Weird If is even and in the inclusive range of to , print Weird If is even and greater than      , print Not Weird  Complete the stub code provided in your editor to print whether or not is weird.",
    //     "difficulty_level" : "EASY",
    //     "marks" : 10,
    //     "sample_input" : "3" ,
    //     "sample_output" : "Weired" ,
    //     "test_case" : "24" ,
    //     "result_test_case" : "Not weird" ,
    //     "solution_code" : "import java.io.*; import java.math.*; import java.security.*; import java.text.*; import java.util.*; import java.util.concurrent.*; import java.util.regex.*;  public class Solution {        private static final Scanner scanner = new Scanner(System.in);      public static void main(String[] args) {         int N = scanner.nextInt();                   scanner.close();     } } "
    
    //   },
    //   {
    //     "problem_id" : 4 ,
    //     "contest_id" : 1,
    //     "title" : "java-if-else",
    //     "problem_statement" : "In this challenge, we test your knowledge of using if-else conditional statements to automate decision-making processes.",
    //     "explanation" : "Given an integer,  , perform the following conditional actions:      If   is odd, print Weird If is even and in the inclusive range of to , print Not Weird If is even and in the inclusive range of to , print Weird If is even and greater than      , print Not Weird  Complete the stub code provided in your editor to print whether or not is weird.",
    //     "difficulty_level" : "HARD",
    //     "marks" : 10,
    //     "sample_input" : "3" ,
    //     "sample_output" : "Weired" ,
    //     "test_case" : "24" ,
    //     "result_test_case" : "Not weird" ,
    //     "solution_code" : "import java.io.*; import java.math.*; import java.security.*; import java.text.*; import java.util.*; import java.util.concurrent.*; import java.util.regex.*;  public class Solution {        private static final Scanner scanner = new Scanner(System.in);      public static void main(String[] args) {         int N = scanner.nextInt();                   scanner.close();     } } "
    
    //   },
    //   {
    //     "problem_id" : 5 ,
    //     "contest_id" : 1,
    //     "title" : "java-if-else",
    //     "problem_statement" : "In this challenge, we test your knowledge of using if-else conditional statements to automate decision-making processes.",
    //     "explanation" : "Given an integer,  , perform the following conditional actions:      If   is odd, print Weird If is even and in the inclusive range of to , print Not Weird If is even and in the inclusive range of to , print Weird If is even and greater than      , print Not Weird  Complete the stub code provided in your editor to print whether or not is weird.",
    //     "difficulty_level" : "HARD",
    //     "marks" : 10,
    //     "sample_input" : "3" ,
    //     "sample_output" : "Weired" ,
    //     "test_case" : "24" ,
    //     "result_test_case" : "Not weird" ,
    //     "solution_code" : "import java.io.*; import java.math.*; import java.security.*; import java.text.*; import java.util.*; import java.util.concurrent.*; import java.util.regex.*;  public class Solution {        private static final Scanner scanner = new Scanner(System.in);      public static void main(String[] args) {         int N = scanner.nextInt();                   scanner.close();     } } "
    
    //   }];


