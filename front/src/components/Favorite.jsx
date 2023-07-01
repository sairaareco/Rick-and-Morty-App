import style from "./css/Favorite.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import FavoriteCard from "./FavoriteCard";

const Favorite = () => {
const favorites = useSelector(state => state.myFavorites);
const dispatch = useDispatch();

const orderDispatch = (event) => {
    dispatch(orderCards(event.target.value));
};

const filterDispatch = (event) => {
    dispatch(filterCards(event.target.value));
};

return (
    <div className={style.contenedor}>
        <div className={style.filtros}>
            <select title="menu" onChange={orderDispatch} className={style.orden}>
                <option value="ASCENDENTE" className={style.nombre}> Ascendente </option>
                <option value="DESCENDENTE" className={style.nombre}> Descendente </option>
            </select>

            <select title="menu" onChange={filterDispatch} className={style.genero}>                    <option value="Male" className={style.nombre}> Male </option>
                <option value="Female" className={style.nombre}> Female </option>
                <option value="Genderless" className={style.nombre}> Genderless </option>
                <option value="unknown" className={style.nombre}> Unknown </option>
            </select>
        </div>

        <div className={style.tarjetas}> 
        {             
            favorites.map((fav) => {
                return <FavoriteCard 
                key= {fav.id}
                id= {fav.apiId}
                name= {fav.name}
                species= {fav.species}
                gender= {fav.gender}
                image= {fav.image}
                onClose= {fav.onClose}
                />
            })
        }
        </div>

    </div>
)
};

export default Favorite;
