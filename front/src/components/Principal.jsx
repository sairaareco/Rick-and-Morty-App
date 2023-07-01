import { useNavigate } from "react-router-dom";
import style from "./css/Principal.module.css";

const Principal = () => {
const navigate = useNavigate();

const handleClick = ()=> {
    navigate("/home")
};

    return (
        <div className={style.contenedor}>
            <button onClick={handleClick} className={style.boton}> HOME </button>
        </div>
    )
};

export default Principal;