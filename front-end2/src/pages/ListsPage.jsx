import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ListDisplay from "../components/ListDisplay";
import CreateListModal from "../components/CreateListModal";
import { useState } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";

const ListsPage = () => {
  const [lists, setLists] = useState(useLoaderData());
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "space-around" }}>
        Lists Page
        <Button variant="primary" onClick={() => setShowModal(true)}>
          +
        </Button>
      </h1>
      <CreateListModal
        show={showModal}
        setShow={setShowModal}
        setLists={setLists}
        lists={lists}
      />
      <Container>
        {lists.map((list, idx) => (
          <ListDisplay list={list} key={idx} />
        ))}
      </Container>
    </>
  );
};

export default ListsPage;
