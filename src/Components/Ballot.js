import React from 'react';
import './Ballot.css';

const Ballot = (props) => {

  const submit = () => {
    props.clickToSubmitParent()
  }

  return (
    <div>
      <button className="submit-button" onClick={submit}>Submit</button>
    </div>
  )
}

export default Ballot;