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
                {props.userSelection.map((movie, i) => (
                    <div key={i}>
                        <p className="modal-text">{movie.title} ({movie.cat})</p>
                    </div>
                ))}
                <button className="modal-close-button" onClick={close}>Close</button>
            </div>
        </div>
    )
}

export default Modal;