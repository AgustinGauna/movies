import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate, NavLink} from 'react-router-dom'
import { toast } from 'react-toastify';
import '../css/App.css'

const Listado = () => {

    const [moviesList, setMoviesList] = useState([])
    const navigate = useNavigate()

    let token = localStorage.getItem('token');
    useEffect(()=> {

      if(token === null){
          navigate('/');
      }
      },[])

      useEffect(()=>{
        console.log(process.env)
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_BACKEND_URL}&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        .then(res =>{
          const apiData = res.data
          setMoviesList(apiData.results)
        })
        .catch(err => toast.error("Hubo un error al cargar las peliculas"))
      },[])


  return (
    <div className='row container justify-content-center '>
      {
        moviesList.map((movie, index) => {
          return (
            <div key={index} className='col-5 '>
              <div className="card my-4 movie_container" >
                  <img style={{maxWidth:'1000px'}} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="card-img-top" alt="..." />
                    <div className="card-body  d-flex flex-column justify-content-between">
                      <h5 className="card-title titulo">{movie.title.length > 15 ? `${movie.title.substring(0,25)}...` : movie.title } </h5>
                      <NavLink to={`/detalle?movieID=${movie.id}`} className="titulo2 btn btn-primary">Más</NavLink>
                    </div>
              </div>
            </div>
          )
        }

        )
      }
    </div>
  )
}

export default Listado