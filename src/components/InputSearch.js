import { useState } from "react"
import { useDispatch } from "react-redux";
import { search} from '../features/movie';
import axios from 'axios';
import '../components/InputSearch.css';

export default function InputSearch (){

    const dispatch = useDispatch()
    const [inputValue2, setInputValue2] = useState({
        inputValue: " ",
       })

    async function getMovie (){
        try {
          const result = await axios.get(`http://www.omdbapi.com/?t=${inputValue2.inputValue}&apikey=597c27d6`)

          dispatch(search(
        { 
            title: result.data.Title, 
            plot: result.data.Plot, 
            actors: result.data.Actors, 
            poster: result.data.Poster
        }
        )) 
        } catch (error) {
          console.log(error)
        }
    }

    function reset(){
        dispatch(search(
            { 
                title: "", 
                plot: "", 
                actors: "", 
                poster: ""
            }
            )) 
    }

    function handleInput(e) {
        let value = e.target.value;
        setInputValue2({ ...inputValue2, [e.target.name]: value });
    }

    return (
        <div className="container">
          <div className="title2">Data Cine</div> 
          <div className="description">Quer saber tudo sobre seu filme favorito? com o Data Cine você só precisa buscar pelo seu filme e nós fazemos o resto!</div>
          
          <div className="buttons">
            <input type="text" name="inputValue"  placeholder="Movie name" value={inputValue2.inputValue} onChange={handleInput} />
            <button onClick={getMovie}>Search</button>
            <button onClick={reset}>Reset</button>
          </div>
          
        </div>
    )
}

