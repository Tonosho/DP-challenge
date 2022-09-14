import React from 'react';
import './Ballot.css';
import './Modal.css';

const Modal = (props) => {

    // Fermeture au clic 
    const close = () => {
        props.closeModalParent()
    }

    return (
        <div className="Background-box">
            <div className="Box">
                <p className="Modal-title">Thank you for your vote!</p>                
                {props.userSelection.map((e, i) => (
                    <div>
                        <p className="Modal-text" key={i}>{e.title} ({e.cat})</p>
                    </div>
                ))}
                <img src="https://i.redd.it/mfg6rhpn6t471.jpg" alt="Good enough!" className="Image"></img>
                <div className="Close-button" onClick={close}>Close</div>
            </div>
        </div>
    )
}

export default Modal;