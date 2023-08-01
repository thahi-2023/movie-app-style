
import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  text-align: right;
  background: #A8FF6E;
  background: -moz-linear-gradient(top, #A8FF6E 0%, #F5F5F5 100%);
  background: -webkit-linear-gradient(top, #A8FF6E 0%, #F5F5F5 100%);
  background: linear-gradient(to bottom, #A8FF6E 0%, #F5F5F5 100%);
`

function App() {
  const apiKey = 'f371a1f2'
  const [movie, setMovie] = useState(null)

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      const data = await response.json();
      setMovie(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    getMovie('shrek');
  }, [])
  

  return (
    <Container>
      <Form movieSearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </Container>
  )
}

export default App