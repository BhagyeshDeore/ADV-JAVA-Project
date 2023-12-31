import { Button, Card, Col, Container, Modal, Row, Form, DropdownButton, Dropdown } from "react-bootstrap";
import { THeader } from "./THeader";
import { useEffect, useState } from "react";
import { T_Contest_card } from "./T_Contest_card";
import { createContest, getContest } from "../../Services/Teacher_services/Teacher_APIs";
import { getTeacherID } from "../../Utiles/Teacher_utiles/Teacher_Token_util";


export function T_DashBoard(props){

    const [show, setShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('DSA');

    const [formData, setFormData] = useState({
       title : "",
       description : "",
       topic : selectedCategory,
       teacherId : getTeacherID()
      });

    const handleClose = () => setShow(false);
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
            ["topic"]: selectedCategory,
            }));
        console.log(formData)
        await postOnAPI();
        getFromApi();

        setFormData({
            title : "",
            description : "",
            topic : selectedCategory,
            teacherId : getTeacherID()
           });
        setShow(false);   
    };
    const handleShow = () => setShow(true);

    //dummy data as of now
    const[contestList, setContestList] = useState( [ ]);

    const getFromApi = async ()=>{
        try{
             const result = await getContest(getTeacherID());
             console.log(result.data);
             setContestList(result.data);
             
        }catch(error){
          
           console.log("from api",error.data)
        }
     }

     const postOnAPI = async ()=>{
        try{
             const result = await createContest(formData);
             console.log("from create contest api ",result.data);
        }catch(error){
          
           console.log("from Login api",error)
        }
     }

    useEffect(()=>{
        getFromApi();
    },[]);


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

    return(
        <>
            <THeader text="Teacher DashBoard Page "></THeader>

            

            <Container>
                <Button variant="primary" size="lg" onClick={handleShow}>
                    Add New Contest    
                </Button>
                <Row xs={1} md={3} className="g-4">
                    {contestList.map((element) => (
                        <Col key={element.contestId}> 
                            <T_Contest_card title={element.title} 
                                description={element.description} 
                                topic={element.topic}
                                ID={element.contestId}
                                start_time={element.start_time}
                                end_time={element.end_time}
                                created_at={element.createdAt}>
                            </T_Contest_card>
                        </Col>
                    ))}
                </Row>
            </Container>




            {/* Modal for add contest */}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Contest</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Contest Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Add Title here..."
                            autoFocus
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
                        <Form.Label>Contest Description</Form.Label>
                        <Form.Control requiredname="description"
                            value={formData.description}
                            onChange={handleChange}
                            name="description"
                            isInvalid={!!errors.description}
                            as="textarea" rows={3} />
                        </Form.Group>

                        <div className="d-flex justify-content-center align-items-center pe-5">
                            <DropdownButton
                                name="topic"
                                title={`Topic ${selectedCategory}`}
                                onSelect={(eventKey) => setSelectedCategory(eventKey)} value={selectedCategory}>
                                <Dropdown.Item name="topic"  eventKey="DSA" value="DSA">DSA</Dropdown.Item>
                                <Dropdown.Item name="topic" eventKey="OOPs" value="OOPs">OOPs</Dropdown.Item>
                                <Dropdown.Item name="topic" eventKey="String" value="String">String</Dropdown.Item>
                                <Dropdown.Item name="topic" eventKey="ExceptionHandling" value="ExceptionHandling">ExceptionHandling</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        Add Contest
                    </Button>
                    </Modal.Footer>
                </Modal>
        </>
    )
}











// {
//     "contest_id" : 1, 
//     "teacher_id" : 1  ,
//     "title" :  "title1", 
//     "topic" :  "String", 
//     "description" : "title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1" ,
//     "start_time" :  "2023-10-31 15:30:45", 
//     "end_time" :  "2023-12-31 15:30:45", 
//     "created_at" :  "2023-10-31 15:30:45"
//   },
// {
//     "contest_id" : 2, 
//     "teacher_id" : 1  ,
//     "title" :  "title1title1title1", 
//     "topic" :  "Array", 
//     "description" : "title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1" ,
//     "start_time" :  "2023-12-31 15:30:45", 
//     "end_time" :  "2023-12-31 15:30:45", 
//     "created_at" :  "2023-12-31 15:30:45"
//   },
// {
//     "contest_id" : 3, 
//     "teacher_id" : 1  ,
//     "title" :  "title1title1", 
//     "topic" :  "Number", 
//     "description" : "title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1" ,
//     "start_time" :  "2023-12-31 15:30:45", 
//     "end_time" :  "2023-12-31 15:30:45", 
//     "created_at" :  "2023-12-31 15:30:45"
//   },
// {
//     "contest_id" : 4, 
//     "teacher_id" : 1  ,
//     "title" :  "title1", 
//     "topic" :  "Array", 
//     "description" : "title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1" ,
//     "start_time" :  "2023-12-31 15:30:45", 
//     "end_time" :  "2023-12-31 15:30:45", 
//     "created_at" :  "2023-12-31 15:30:45"
//   },
// {
//     "contest_id" : 5, 
//     "teacher_id" : 1  ,
//     "title" :  "title1title1title1title1", 
//     "topic" :  "Number", 
//     "description" : "title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1" ,
//     "start_time" :  "2023-12-31 15:30:45", 
//     "end_time" :  "2023-12-31 15:30:45", 
//     "created_at" :  "2023-12-31 15:30:45"
//   }