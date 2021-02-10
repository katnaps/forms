import React, { useState } from 'react';
import Forms from './Forms';

export default () => {
    const [modalState, setModalState] = useState(false);

    // handles click event to open up modal form
    const handleModalState = () => {
        setModalState(true);
    }


    return (
        <div className="main-btn">
            <button className="modal-btn">Open Form</button>
            <div className="modal-container-open">
                <div className="modal-content">
                    <Forms modalState={modalState} />
                </div>
            </div>
        </div>
    )
}