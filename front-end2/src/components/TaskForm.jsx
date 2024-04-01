import Form from "react-bootstrap/Form";

function TaskForm({ task, handleClose }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter the name of this task" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>{task ? "Task" : "Sub-Task"}</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Form>
  );
}

export default TaskForm;
