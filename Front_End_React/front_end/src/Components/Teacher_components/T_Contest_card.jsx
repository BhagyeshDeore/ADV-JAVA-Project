import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function T_Contest_card(props){

    const navigate = useNavigate();
    function seeAttemptPage() {
        navigate(`/teacher-see-attempts?contest_id=${props.ID}`)
    }

    return(
        <Card className="mt-3 " border="danger"  text="muted" >
            <Card.Header  as="h5">Contest ID : {props.ID}</Card.Header>
            <Card.Body>
                <Card.Title >Title : {props.title}</Card.Title>
                <Card.Text >
                    <h6>Description : </h6>{props.description} <hr></hr><br/>
                    <h6>Start Time : {props.start_time} </h6>
                    <h6>End Time : {props.end_time} </h6>
                </Card.Text>
                <Button onClick={seeAttemptPage} variant="primary">See Results</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Created AT : {props.created_at}</Card.Footer>
        </Card>
    );
}