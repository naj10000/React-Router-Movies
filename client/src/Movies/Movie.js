import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  // const { history } = useHistory();
  const { id } = useParams();
 console.log(props)
  useEffect(() => {
    
    
    

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });

        

  },[]);
  
 
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
     <div className="save-button" onClick={saveMovie}>Save</div>
    </div>
  );
}

export default Movie;
