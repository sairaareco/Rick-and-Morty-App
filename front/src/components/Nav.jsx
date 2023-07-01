import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import style from "./css/Nav.module.css";

const Nav = ({onSearch, setCharacters, characters}) => {

    const handleRandom = () => {
        const randomId = Math.floor(Math.random() * 826) + 1;
        const URL = "https://rickandmortyapi.com/api/character/";
        
        fetch(`${URL}${randomId}`)
            .then((response) => response.json())
            .then((data) => {
            if (data.name && !characters.find((char) => char.id === data.id)) {
                setCharacters((characters) => [...characters, data]);
            } else {
                handleRandom();
            }
        })
    };
    
    return(
        <div className={style.menu}>
            <Link to="/home" className={style.home} ><h4> HOME </h4> </Link>
            <Link to="/about" className={style.about} ><h4> ABOUT </h4> </Link>
            <Link to="/favorites" className={style.favorites}> <h4> FAVORITES </h4></Link>
            <Link to="/form" className={style.form} ><h4> FORM </h4> </Link>
            <SearchBar onSearch={onSearch}/>
            <button onClick={handleRandom} className={style.randomButton}> Random Character </button>
        </div>
    )
}

export default Nav;
