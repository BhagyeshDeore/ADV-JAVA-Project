import {Container, Alert} from "react-bootstrap";

export function SHeader(props){
    return(
        <Container className = 'mt-3'>
            <Alert variant='success'>
                <h4>{props.text}</h4>
            </Alert>
        </Container>
    );
}