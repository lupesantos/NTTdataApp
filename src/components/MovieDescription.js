import '../components/MovieDescription.css';
import { useSelector } from 'react-redux'

export default function MovieDescription(){
    const movie = useSelector((state) => state.movie.value);
    console.log(movie.actors)

    return (
        <>
        {movie.actors === "" ? 
        <><div className='movie'></div></>
            :
        <div className='movie'>
            <div className='left'>
                <div className="title">{movie.title}</div>
                <div className='description'>{movie.plot}</div>
                <div className='actors'><span>Actors: </span>{movie.actors}</div>
            </div>

            <div className='right'>
                <img src={movie.poster}></img>
            </div>
        </div> }
        </>    
    )
}