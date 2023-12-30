import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function T_Problem_card(props){

    const navigate = useNavigate();
   

    return(
        <Card className="mt-3 " border="danger"  text="muted" >
            <Card.Header  as="h5">Problem ID : {props.ID}</Card.Header>
            <Card.Body>
                <Card.Title >Title : {props.title}</Card.Title>
                <Card.Text >
                    <h6>Problem Statement : </h6>{props.problemStatement} <hr></hr>
                    <h6>Difficulty Level : {props.difficulty} </h6>
                    <h6>Marks : {props.marks} </h6>
                </Card.Text>
               <Button  variant="success">Edit Problem</Button> 
            </Card.Body>
        </Card>
    );
}