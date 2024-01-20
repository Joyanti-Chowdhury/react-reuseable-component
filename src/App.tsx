import { useState } from "react";
// import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
// import Modal from "./components/ui/Modal";
import NormalForm from "./components/NormalForm/NormalForm";

function App() {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  const handleSubmit = (e: FormDataEvent) => {
    e.preventDefault();
    console.log("Clicked");
    if (true) {
      handleModalClose();
    }
  };

  return (
    <Container>

    <NormalForm></NormalForm>










      {/* <div className=" relative h-screen w-full flex justify-center items-center ">
        <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <Modal.Header>
            <h1>This is Modal Header</h1>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <p>This is a Content</p>
          <form action="" onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Submit</button>
          </form>
        </Modal>
      </div> */}
    </Container>
  );
}

export default App;
