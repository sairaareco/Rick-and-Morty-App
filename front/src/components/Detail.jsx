import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./css/Detail.module.css";

const Detail = () => {
const [character, setCharacter] = useState({});
const params = useParams();

useEffect(() => {

const URL = "http://localhost:3001/rickandmorty/detail";
fetch(`${URL}/${params.detailId}`)
        .then((response) => response.json())
        .then((char) => {
        if (char.name) {
            setCharacter(char);
        } else {
            window.alert("No hay personajes con ese ID");
        }
    })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
    });
    return setCharacter({});
    }, [params.detailId]);
    
    
    return (
        <div className={style.contenedor}>

            <div >
            { character.name ? 
            <div className={style.detailCard}>
                <div className={style.descripcion}>
                    <h1 className={style.titulo}>{character.name}</h1>
                        <p className={style.status}>{character.status}</p>
                        <p className={style.specie}>{character.specie}</p>
                        <p className={style.gender}>{character.gender}</p>
                        <p className={style.origin}>{character.origin?.name}</p>
                </div>
                    <img src={character.image} alt="" className={style.imagen}/>
                </div>
            : 
            <h2 className={style.loading}>Loading...</h2>
            } 
            </div> 

        </div>
    )
};

export default Detail;
