import { useState } from 'react';
import './index.css';
import { Modal } from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openModal} className="btn">
        Open
      </button>
      <Modal
        isOpen={isModalOpen}
        title="Modal Title"
        positionTitle="right"
        borderTitle={false}
        insideBorderColor="black"
        insideBorderWidth={1}
        onClose={closeModal}
        backgroundColor="red"
        backgroundOpacity={20}
        modalMaxWidth="700px"
        modalBackgroundColor="white"
        modalBorderColor="#898b8f"
        modalBorderWidth={1}
        modalBorderRadius={12}
        closeColor="black"
        positionCloseButton="left"
        blurAmount={6}
      >
        <p className="font-bold "> this is a modal test</p>
      </Modal>

      <div className="bg-indigo-200">
        <p>test</p>
      </div>
    </>
  );
}

export default App;
