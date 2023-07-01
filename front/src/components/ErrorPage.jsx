import style from "./css/Error.module.css";

const ErrorPage = () => {

    return (
        <div  className={style.contenedor} >
            <div> 
            <h1 className={style.titulo}> ERROR 404</h1>
            <h2 className={style.mensaje}> This is not the web page are you looking for. Try again! </h2>
            </div>
        </div>
    )
};

export default ErrorPage;