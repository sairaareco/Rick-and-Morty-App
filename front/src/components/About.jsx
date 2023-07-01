import style from "./css/About.module.css";

const About = () => {

    return(
        <div className={style.contenedor}>
            <h1 className={style.titulo}> SOBRE MI </h1>
            <div className={style.contenedorTextos}> 
            <p className={style.texto}> Hola! Mi nombre es Saira, y este es mi primer proyecto dev. Soy estudiante de programacion, me acerque por primera vez a este mundo en octubre de 2022. Mi primer contacto fue con html y css, hasta que finalmente me lance a aprender JavaScript, como mi primer lenguaje de programacion.</p>
            <p className={style.texto}> Actualmente continuo formandome, aprendiendo nuevas tecnologias y aplicando cada nuevo conocimiento en los proyectos que creo.</p>
            <p className={style.texto}> Mi deseo mas grande y actual meta es obtener un puesto laboral en este mundo, desarrollar mis habilidades, poner en practica todo aquello que aprendi y continuar creciendo de la mano de aquellos que puedan darme esa oportunidad.</p>
            <p className={style.texto}>Se que aun me queda mucho por aprender pero estoy preparada para enfrentar con entusiasmo y humildad aquellos retos que implica pertenecer a este hermoso mundo. </p>
            <p className={style.texto}>Espero que te haya gustado este proyecto. Es simple, pero es un primer pasito en este gran recorrido. Muchas gracias por leerme!</p>
            </div>

        </div>
    )
}

export default About;