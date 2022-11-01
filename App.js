import React, { useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <LoadMovies></LoadMovies>
    </div>
  );
}

function LoadMovies() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then ((resp) => resp.json())
    .then ((data) => setMovies(data))
  }, []);
  return (
    <div className="movies">
      <h3>Total Number of Studio Ghibli Movies: {movies.length}</h3>
      {movies.map((movie) => (
        <Movie movie={movie}></Movie>
      ))}
    </div>
  );
}

function Movie(props) {
  const {title, image, description} = props.movie;
  return (
    <div className="movie">
      <h2>{title}</h2>
      <img src={image} alt=""/>
      <p>{description}</p>
    </div>
  );
}

export default App;
