import React from 'react';
import './Ballot.css';
import './Modal.css';

const Modal = (props) => {

    // Click to close
    const close = () => {
        props.closeModalParent()
    }

    return (
        <div className="modal-background-box">
            <div className="modal-box">
                <p className="modal-title">Thank you for your vote!</p>
                {props.userSelection.map((e, i) => (
                    <div key={i}>
                        <p className="modal-text">{e.title} ({e.cat})</p>
                    </div>
                ))}
                <div className="modal-close-button" onClick={close}>Close</div>
            </div>
        </div>
    )
}

export default Modal;