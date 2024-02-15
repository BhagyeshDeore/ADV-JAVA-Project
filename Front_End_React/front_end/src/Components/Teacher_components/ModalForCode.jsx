import { Modal , Button } from "react-bootstrap";

export function ModalForCode(props) {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Attempt ID : {props.attemptId}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Code Submitted :</h5><br/>
            <pre>
              <code>
                {props.code}
              </code>
            </pre>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
}
