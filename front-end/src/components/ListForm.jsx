import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { api } from "../utilities";
import { useState } from "react";

function ListForm({ handleClose, setLists, lists }) {
  const [name, setName] = useState("");

  const createAList = async (e) => {
    e.preventDefault();
    let response = await api.post("lists/", {
      name: name,
    });
    if (response.status === 201) {
      setLists([...lists, response.data]);
      setName("");
      handleClose();
    } else {
      alert(response.data);
    }
  };

  return (
    <Form onSubmit={(e) => createAList(e)}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter list name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => [handleClose(), setName("")]}
        >
          Close
        </Button>
        <Button variant="primary" type="submit">
          Confirm
        </Button>
      </Modal.Footer>
    </Form>
  );
}

export default ListForm;
