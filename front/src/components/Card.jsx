import style from "./css/Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import {  addFavorite, deleteFavorite } from "../redux/actions";


const Card = ({apiId, id, name, species, gender, image, onClose, myFavorites, addFavorite, deleteFavorite}) =>{

    const [isFav, setIsFav] = useState(false);
    
    useEffect(() => {
        myFavorites.forEach((fav) => {
            console.log(fav.apiId)
            console.log(id);
            if (fav.apiId === id) {
                setIsFav(true);
            }
        });
    }, [myFavorites, id]);

    const handleFavorite = () =>{
        if (isFav) {
            setIsFav(false)
            deleteFavorite(id);
        } else {
            setIsFav(true)
            addFavorite({apiId, id, name, species, gender, image, onClose})
        }
    };


    return (
        <div className={style.card}>
            {
            isFav ? ( <button onClick={handleFavorite} className={style.favs}>❤️</button> ) 
            : ( <button onClick={handleFavorite} className={style.favs}>🤍</button> )
            }

            <button onClick={() => onClose(id)} className={style.button}> X </button>
            <img src={image} 
                alt={`imagen del personaje ${name} de rick and morty`} 
                className={style.imagen}/>
            
            < div className={style.header}>

            <h2 className={style.species}> Species: {species}</h2>
            <h2 className={style.gender}> Gender: {gender}</h2>
            
            </div>

            <Link to={`/detail/${id}`} title="link" className={style.titulo}>
                <h1>{name}</h1>
            </Link>

        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

const mapDispatchToProps = (dispatch) => {
    return { 
        addFavorite : (character) => { 
            dispatch(addFavorite(character))
        },
        deleteFavorite : (id) => {
            dispatch(deleteFavorite(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

