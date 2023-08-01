
import React from "react";
import styled from "styled-components";


const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Title = styled.h3`
  font-size: 3.5em;
  color: #646cff;
  text-align: center;
`
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const Content = styled.div`
  text-align: center;
`
const Ratings = styled.div`
  color: orange;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <Details>
        

        <img src={movie.Poster || "N/A"} alt={movie.Title} />

        <div>
          <Title>{movie.Title || "N/A"}</Title>
           
          <Ratings>
            <h5>Rotten Tomatoes: {movie.Ratings[1].Value || "N/A"}</h5>
            <h5>IMDb: {movie.Ratings[0].Value || "N/A"}</h5>
          </Ratings>

          <Info>
            <h5>Genre: {movie.Genre || "N/A"}</h5>
            
            
          </Info>

          

          <Content>
          <h4>Cast: {movie.Actors || "N/A"}</h4>
            <h3>Plot: {movie.Plot || "N/A"}</h3>
            
            
          </Content>

          
        </div>
      </Details>
    );
  };

  const loading = () => {
    return <h1>No movie to display</h1>;
  };

  return movie ? loaded() : loading();
}

export default MovieDisplay;