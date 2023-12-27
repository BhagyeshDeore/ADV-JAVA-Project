import {Container, Alert} from "react-bootstrap";

export function AHeader(props){
    return(
        <Container className = 'mt-3'>
            <Alert variant='secondary'>
                <h4>{props.text}</h4>
            </Alert>
        </Container>
    );
}