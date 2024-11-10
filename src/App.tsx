import { useState } from 'react';
import Modal from './components/Modal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  if(isModalOpen) return (
    <Modal isOpen={isModalOpen}>
      <Modal.Header title={'Tytuł modala'} toggle={toggleModal} />
      <Modal.Content>
        <h1>to powinno tak działać </h1>
      </Modal.Content>
      <Modal.Footer callToActionLabel={"Udało się"} />
    </Modal>
  );
}