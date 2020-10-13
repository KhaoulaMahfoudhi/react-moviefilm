import React, { useState } from "react";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
Modal.setAppElement("#root");

export const AddMovie = ({ addMovie }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Rate, setRate] = useState();
  const [Image, setImage] = useState("");
  const SubnewMovie = (event) => {
    event.preventDefault();
    let newMovie = {
      title: Title,
      description: Description,
      rate: Rate,
      posterUrl: Image,
    };
    addMovie(newMovie);
    setModalIsOpen(false);
  };

  return (
    <div>
      <Button
        className="add-movie-btn"
        variant="success"
        onClick={() => setModalIsOpen(true)}
        style={{ marginTop: "40px", marginRight: "30px", float: "right" }}
      >
        add new movie
      </Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "#22254b",
          },
          content: {
            color: "#22254b",
          },
        }}
      >
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movie title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movie description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movie Rate"
              onChange={(e) => setRate(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movie image"
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={SubnewMovie}>
            Add movie
          </Button>
        </Form>

        <div>
          <Button
            variant="danger"
            style={{ float: "right" }}
            onClick={() => setModalIsOpen(false)}
          >
            cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};
export default AddMovie;
