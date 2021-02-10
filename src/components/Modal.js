import React, { useState } from 'react';
import Forms from './Forms';
import ModalContext from "../contexts/ModalContext";

export default ({ child }) => {
    const [modalState, setModalState] = useState(false);

    // handles click event to open up modal form
    const handleModalState = () => {
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

        setModalState(true);
    }
    // handle click event to close the modal form
    const closeModalState = () => {
        document.body.style.backgroundColor = '#fff';
        setModalState(false);
    }


    return (
        <ModalContext.Provider value={{ closeModalState }}>
            <div className="btn-container">
                <div className="main-btn">
                    <button className="modal-btn" onClick={handleModalState}>Open Form</button>
                </div>
            </div>
            <div className={modalState ? "modal-container-open" : "modal-container-close"}>
                <div className="modal-content">
                    <Forms />
                </div>
            </div>


            {child}
        </ModalContext.Provider>
    )
}
