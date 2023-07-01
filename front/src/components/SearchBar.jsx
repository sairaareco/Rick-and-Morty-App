import { useState } from "react";
import style from "./css/SearchBar.module.css";

const SearchBar = ({onSearch}) => {
const [id, setId] = useState("");

const handleChange = (event) => {
    setId(event.target.value)
};

    return(

        <div className={style.buscador}>
                <input type="text" 
                    name="" 
                    id="" 
                    title="personajes"
                    placeholder="ingresa un número de ID"
                    onChange={handleChange} 
                    className={style.input} />            
                <button 
                    onClick={() => onSearch(id)} 
                    className={style.button}   
                >SEARCH</button>
        </div>
    )
};

export default SearchBar;
