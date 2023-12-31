import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function S_Contest_card(props){

    const navigate = useNavigate();
    function ProblemPage() {
        navigate(`/student-seeContest?contest_id=${props.ID}`)
    }

    return(
        <Card className="mt-3 "  text="muted" >
            <Card.Header  as="h5">Contest ID : {props.ID}</Card.Header>
            <Card.Body>
                <Card.Title>Title : {props.title}</Card.Title>
                <Card.Text>
                    <h6>Description : {props.description} </h6>
                    <hr>
                    </hr>
                    <br/>
                    <h6>Topic : {props.topic} </h6>
                    <h6>Start Time : {props.start_time} </h6>
                    <h6>End Time : {props.end_time} </h6>
                </Card.Text>
                <Button onClick={ProblemPage} variant="primary">Start</Button>
            </Card.Body>
            
        </Card>
    );
}