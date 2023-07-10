import { useState, useRef } from 'react';
import useOnClickOutside from '../components/useOnClickOutside';

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, openModal, () => setOpenModal(false));
  return (
    <div className="modal">
      <button className="open" type="button" onClick={() => setOpenModal(true)}>Open the modal</button>
      {openModal && (
        <div ref={ref} className="modalContent">
          <button className="close" type="button" onClick={() => setOpenModal(false)}>X</button>
          <div>Modal content here</div>
        </div>
      )}
    </div>
  );
};
export default Modal;
