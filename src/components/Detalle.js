import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

const Detalle = () => {

    const [movieDetail, setMovieDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    let query = new URLSearchParams(window.location.search)
    let movieID = query.get('movieID')
    

    let token = localStorage.getItem('token');
    useEffect(()=> {

      if(token === null){
          navigate('/');
      }
      },[])

      useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=20f6fe657524cdd3531d92bb44be128e&language=es-ES`)
        .then(res => {
            const newDetail = res.data
            setMovieDetail(newDetail)
            console.log(res.data)
            setLoading(false)
        })
        .catch(err => toast.error("No se pudo cargar la informacion de la pelicula"))
      },[])


  return (
     
    <>
    {loading ? <p>Loading...</p> :
     <>
     <h2>{movieDetail.original_title}</h2>
        <div className='row'>
            <div className="col-4">
                <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} className="img-fluid" alt="movie poster" />
            </div>
            <div className="col-8">
                <h5>{movieDetail.release_date}</h5>
                <h5>Reseña: {movieDetail.overview}</h5>
                <h5>Rating: {movieDetail.vote_average}</h5>
                <h5>generos:
                <ul>
                {movieDetail ? 
                movieDetail.genres.map(genero => <li key={genero.id}>{genero.name}</li> )
                :
                ""
                }

                </ul>
                </h5>
            </div>
        </div>
      </> }
    </>
        
      
  )
}

export default Detalle