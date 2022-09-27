import React from 'react';
import './Ballot.css';

const Ballot = (props) => {

  // Click sends data to App parent
  const submit = () => {
    props.clickToSubmitParent()
  }

  return (
    <div className="submit-button" onClick={submit}>Submit!</div>
  )
}

export default Ballot;