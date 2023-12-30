import { Button, Card, Col, Container, Modal, Row, Form, DropdownButton, Dropdown } from "react-bootstrap";
import { THeader } from "./THeader";
import { useState } from "react";
import { T_Contest_card } from "./T_Contest_card";


export function T_DashBoard(props){

    const [show, setShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('DSA');

    const handleClose = () => setShow(false);
    const handleAdd = () => setShow(false);
    const handleShow = () => setShow(true);

    //dummy data as of now
    const[contestList, setContestList] = useState( [
            {
              "contest_id" : 1, 
              "teacher_id" : 1  ,
              "title" :  "title1", 
              "topic" :  "String", 
              "description" : "title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1" ,
              "start_time" :  "2023-10-31 15:30:45", 
              "end_time" :  "2023-12-31 15:30:45", 
              "created_at" :  "2023-10-31 15:30:45"
            },
          {
              "contest_id" : 2, 
              "teacher_id" : 1  ,
              "title" :  "title1title1title1", 
              "topic" :  "Array", 
              "description" : "title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1" ,
              "start_time" :  "2023-12-31 15:30:45", 
              "end_time" :  "2023-12-31 15:30:45", 
              "created_at" :  "2023-12-31 15:30:45"
            },
          {
              "contest_id" : 3, 
              "teacher_id" : 1  ,
              "title" :  "title1title1", 
              "topic" :  "Number", 
              "description" : "title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1" ,
              "start_time" :  "2023-12-31 15:30:45", 
              "end_time" :  "2023-12-31 15:30:45", 
              "created_at" :  "2023-12-31 15:30:45"
            },
          {
              "contest_id" : 4, 
              "teacher_id" : 1  ,
              "title" :  "title1", 
              "topic" :  "Array", 
              "description" : "title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1" ,
              "start_time" :  "2023-12-31 15:30:45", 
              "end_time" :  "2023-12-31 15:30:45", 
              "created_at" :  "2023-12-31 15:30:45"
            },
          {
              "contest_id" : 5, 
              "teacher_id" : 1  ,
              "title" :  "title1title1title1title1", 
              "topic" :  "Number", 
              "description" : "title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1title1" ,
              "start_time" :  "2023-12-31 15:30:45", 
              "end_time" :  "2023-12-31 15:30:45", 
              "created_at" :  "2023-12-31 15:30:45"
            }
        ]);


      
    return(
        <>
            <THeader text="Teacher DashBoard Page "></THeader>

            

            <Container>
                <Button variant="primary" size="lg" onClick={handleShow}>
                    Add New Contest    
                </Button>
                <Row xs={1} md={3} className="g-4">
                    {contestList.map((element) => (
                        <Col key={element.contest_id}> 
                            <T_Contest_card title={element.title} 
                                description={element.description} 
                                topic={element.topic}
                                ID={element.contest_id}
                                start_time={element.start_time}
                                end_time={element.end_time}
                                created_at={element.created_at}>
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
                            required
                        />
                        </Form.Group>
                        <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                        >
                        <Form.Label>Contest Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <div className="d-flex justify-content-center align-items-center pe-5">
                            <DropdownButton
                                title={`Topic ${selectedCategory}`}
                                onSelect={(eventKey) => setSelectedCategory(eventKey)}>
                                <Dropdown.Item eventKey="DSA">DSA</Dropdown.Item>
                                <Dropdown.Item eventKey="OOPs">OOPs</Dropdown.Item>
                                <Dropdown.Item eventKey="String">String</Dropdown.Item>
                                <Dropdown.Item eventKey="ExceptionHandling">ExceptionHandling</Dropdown.Item>
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