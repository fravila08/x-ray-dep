import Modal from "react-bootstrap/Modal";
import ListForm from "./ListForm";

function CreateListModal({ show, setShow, setLists, lists }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListForm 
            handleClose={handleClose} 
            setLists={setLists}
            lists={lists}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateListModal;
