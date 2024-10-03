import React, { useEffect, useState } from 'react'
import './Player.css'
import backArrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams()
  const navigate = useNavigate();



  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
     
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzc1YzU5OWE0NmExYzdkOTZkNTJkZjllZDA0ZTkwNyIsIm5iZiI6MTcyNzI3MDA2OC41Njg4MTgsInN1YiI6IjY2ZjQwYjcyMjFjNDgxYjFkNDIzMDNmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BEnRkDxkWaooWjIAFguHIWfAh48ut56ohairKOpGijs'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response =>setApiData(response.results[0]))
    .catch(err => console.error(err));

  },[])
  
  return (
    <div className='player'>
      <img src={backArrow} alt=""  onClick={()=>{navigate('/')}}/>
      <iframe  width="90%" height="90%"
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
