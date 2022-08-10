import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import '../css/App.css'

const Resultados = () => {

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    const [moviesResults, setMoviesResults] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_BACKEND_URL}&language=es-ES&page=1&include_adult=false&query=${keyword}`

        axios.get(endPoint)
        .then(res => {
            const movieArray = res.data.results;
            setMoviesResults(movieArray)
            if(movieArray.length > 0){
              setLoading(true)
            } else {
              setLoading(false)
            }
        })
        .catch(err => console.log(err))
    },[keyword]);
    
  return (
      <>
      {loading ? "" : <h1 style={{color:"red"}}>No se encontraron resultados</h1>}
      {moviesResults.length === 0 ? "" :
      <>
      <h1>Resultados para: {keyword.toLocaleLowerCase()}</h1>
      <div className='row container justify-content-center '>
      {
        moviesResults.map((movie, index) => {
          return (
            <div key={index} className='col-5' >
              <div className="card my-4 movie_container " >
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <h5 className="card-title">{movie.title.length > 15 ? `${movie.title.substring(0,25)}...` : movie.title }</h5>
                      <NavLink to={`/detalle?movieID=${movie.id}`} className="btn btn-primary">Details</NavLink>
                    </div>
              </div>
            </div>
                 )
            }
        )
      }
    </div>
      </>
      }
      </>
  )
}

export default Resultados