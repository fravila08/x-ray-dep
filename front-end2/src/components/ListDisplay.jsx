import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { api } from "../utilities";

const ListDisplay = ({ list }) => {
  const [edit, setEdit] = useState(true);
  const [name, setName] = useState(list.name);
  const [completed, setCompleted] = useState(list.completed);

  const cancelEdit = () => {
    setName(list.name);
    setCompleted(list.completed);
    setEdit(true);
  };

  const editList = async () => {
    let response = await api.put(`lists/${list.id}/`, {
      name: name,
      completed: completed,
    });
    if (response.status === 200) {
      alert("List has been successfully updated!");
      setEdit(true);
    } else {
      alert(response.data);
      cancelEdit();
    }
  };

  return (
    <Row>
      <Col xs={6}>
        {edit ? (
          name
        ) : (
          <Form.Control
            type="text"
            placeholder={list.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
      </Col>
      <Col xs={3}>
        {edit ? (
          completed ? (
            "Completed"
          ) : (
            "Pending"
          )
        ) : (
          <Form.Group>
            <Form.Label>Completed?</Form.Label>
            <Form.Check
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          </Form.Group>
        )}
      </Col>
      {edit ? (
        <Col xs={1} onClick={() => setEdit(false)}>
          ✏️
        </Col>
      ) : (
        <>
          <Col xs={1} onClick={() => cancelEdit()}>
            ❌
          </Col>
          <Col xs={1} onClick={() => editList()}>
            ✅
          </Col>
        </>
      )}
    </Row>
  );
};

export default ListDisplay;
