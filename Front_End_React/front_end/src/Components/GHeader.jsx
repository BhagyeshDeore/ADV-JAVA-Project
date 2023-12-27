import {Container, Alert} from "react-bootstrap";

export function GHeader(props){
    return(
        <Container className = 'mt-3'>
            <Alert variant='primary'>
                <h4>{props.text}</h4>
            </Alert>
        </Container>
    );
}