import React from 'react';
import './Ballot.css';

const Ballot = (props) => {

  // Remontée du clic vers composant App
  const submit = () => {
    props.clickToSubmitParent()
  }

  return (
    <div className="Submit" onClick={submit}>Submit!</div>
  )
}

export default Ballot;