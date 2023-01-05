import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Ballot from "./Components/Ballot";
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Modal from "./Components/Modal";
import localApi from "./Api/LocalApi";
// import Api from './Api/Api'

// Importing local api for github pages purposes
const apiList = localApi;

function App() {
  const [nominees, setNominees] = useState([]);
  const [myVote, setMyVote] = useState();
  const [modalDisplay, setModalDisplay] = useState(false);

  // Importing api from backend
  // useEffect(() => {
  //   const movies = Api.getBallotData()
  //   if (movies) {
  //     setApiList(movies)
  //   }
  // }, [])

  // Selecting a movie through Card component
  const clickToSelect = (movieName, movieCategory) => {
    if (nominees.length === 0) {
      setNominees([{ title: movieName, category: movieCategory }]);
    }
    else if (nominees.find(element => element.title === movieName && element.category === movieCategory)) {
      setNominees(nominees.filter(movie => movie.title !== movieName));
    }
    else if (nominees.find(element => element.category === movieCategory)) {
      setNominees([...nominees.filter(movie => movie.category !== movieCategory), { title: movieName, category: movieCategory },]);
    }
    else {
      setNominees([...nominees, { title: movieName, category: movieCategory }]);
    }
  };

  // Check if a movie from a specific category is selected in nominees
  const isSelected = (movieName, movieCategory) =>
    nominees.find(nominee => nominee.title === movieName && nominee.category === movieCategory);

  // Check if a movie is excluded in it's category  
  const isExcluded = (movieName, movieCategory) =>
    nominees.find(nominee => nominee.title !== movieName && nominee.category === movieCategory);

  // Sends user's vote through Submit button
  const clickToSubmit = () => {
    setMyVote(nominees);
    setModalDisplay(!modalDisplay);
  };

  // Close modal function
  const closeModal = () => {
    setModalDisplay(!modalDisplay);
  };


  return (
    <div className="app">
      <div className="app-content">
        <h1>AWARD 2021</h1>
        <p>Vote for your favorite candidate in each category</p>

        {/* Display categories */}
        {apiList.map((category, i) => (
          <div key={i}>
            <Banner name={category.title} />
            <div className="movies-row">

              {/* Display movies in each categories */}
              {category.items.map((movie, j) => (
                <div key={j}>
                  <Card
                    movieName={movie.title}
                    movieUrl={movie.photoUrL}
                    movieCategory={category.title}
                    clickToSelectParent={clickToSelect}
                    isSelected={isSelected(movie.title, category.title)}
                    isExcluded={isExcluded(movie.title, category.title)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Submit your vote Button */}
        <Ballot clickToSubmitParent={clickToSubmit} />

        {modalDisplay && (
          <Modal userSelection={myVote} closeModalParent={closeModal} />
        )}

      </div>
    </div>
  );
}

export default App;
