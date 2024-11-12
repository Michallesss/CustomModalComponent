import Modal from './components/Modal';

export default function App() {
  return (
    <Modal>
      <Modal.Header title='Tytuł modala' />
      <Modal.Content>
        <h1>to powinno tak działać </h1>
      </Modal.Content>
      <Modal.Footer callToActionLabel='Udało się' />
    </Modal>
  );
}