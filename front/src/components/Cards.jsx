import Card from "./Card";
import style from "./css/Cards.module.css";

const Cards = ({characters, onClose}) => {

    return(
        <div className={style.cards}>
            {
                characters.map((character)=>{
                    return <Card 
                    key= {character.id}
                    id= {character.id}
                    name= {character.name}
                    species= {character.species}
                    gender= {character.gender}
                    image= {character.image}
                    onClose= {onClose}
                />
                })
            }
        </div>
    )
};

export default Cards;