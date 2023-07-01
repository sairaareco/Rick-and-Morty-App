import style from "./css/Form.module.css";
import { useState } from "react";
import axios from "axios";

const validate = (userData, setErrors) => {
    let usernameError = "";
    let passwordError = "";

    if (!userData.username) {
        usernameError = "Enter your email.";
    } else if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,})+$/.test(userData.username)) {
        usernameError = "Please enter a valid email.";
    } else if (userData.username.length > 35) {
        usernameError = "Max 35 chars.";
    }

    if (!userData.password) {
        passwordError = "Enter a password.";
    } else if (userData.password.length < 6 || userData.password.length > 10) {
        passwordError = "6-10 chars long";
    } else if (!/.*[0-9].*/.test(userData.password)) {
        passwordError = "Num required";
    }

    setErrors({ username: usernameError, password: passwordError });
};

const Form = () => {
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' })
    
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setUserData({...userData, [name] : value});
        validate({...userData, [name] : value}, setErrors)
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();  
        if (!userData.username || !userData.password) {
            return;
        }
        try {
            await axios.post("http://localhost:3001/rickandmorty/login/post", {
                email: userData.username,
                password: userData.password,
            });
                window.alert("¡Gracias por suscribirte! Muy pronto te enviaremos novedades.")
        } catch (error) {
            console.log("Error message:", error.message)
            console.log("Response data:", error.response.data);
        }
    };


    return(
        <div className={style.container}>
            <h1 className={style.titulo}> Sign up! </h1>
            <h2 className={style.subtitulo}> Enter your email and password </h2>
            <h2 className={style.subtituloDos}> and discover Rick and Morty news before anyone else </h2>
            <form onSubmit={handleSubmit} className={style.formulario} action="">
                <div className={style.usuario}>
                    <label htmlFor="username" className={style.labelUsuario}>Username: </label>
                    <input type="text" 
                        placeholder="Ingrese su email" 
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                        className={style.input}/>
                    <p className={style.mensaje}>{errors.username}</p>
                </div>
                
                
                <div className={style.contraseña}>
                    <label htmlFor="password" className={style.labelPass}>Password: </label>
                    <input type="text" 
                        placeholder="Ingrese su contraseña" 
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                        className={style.input}/>
                    <p className={style.mensaje}>{errors.password}</p>
                </div>
                
                <button disabled={!userData.username || !userData.password || 
                errors.username || errors.password} className={style.button}
                    > SUBMIT </button>
            </form>
        </div>)
};

export default Form;