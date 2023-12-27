import {Container, Alert} from "react-bootstrap";

export function THeader(props){
    return(
        <Container className = 'mt-3'>
            <Alert variant='warning'>
                <h4>{props.text}</h4>
            </Alert>
        </Container>
    );
}