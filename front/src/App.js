import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import ErrorPage from './components/ErrorPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Form from './components/Form';
import Principal from './components/Principal';
import Favorite from './components/Favorite';

function App() {
const [characters, setCharacters] = useState([]);
const location = useLocation();

const URL = "http://localhost:3001/rickandmorty/onsearch/"
const onSearch = (id) => {
  fetch(`${URL}${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name && !characters.find((char) => char.id === data.id)) {
        setCharacters((characters) => [...characters, data]);
      } else {
        window.alert('No hay personajes con ese ID');
      }
  });
};

const onClose = (id) => {
  setCharacters(
    characters.filter((char)=> char.id !== id)
  )
};

return ( 
    <div>
        {
        location.pathname !== "/" && location.pathname !== "*" 
        ?
          <Nav onSearch={onSearch} setCharacters={setCharacters} characters={characters} />
        : 
          null
        }

      <Routes>

        <Route path="/home" element={ <Cards
          characters = {characters} 
          onClose = {onClose}
        />} />

        <Route path="/about" element={<About/>} />

        <Route path="/detail/:detailId" element={<Detail/>} />

        <Route path="*" element={<ErrorPage/>} /> 

        <Route path="/favorites" element= {<Favorite/>} />

        <Route path="/Form" element={<Form/>} />

        <Route path="/" element={<Principal/>}/>
      </Routes>

    </div>
  );
}

export default App;

// QUIERO QUE EN ERROR PAGE NO SE VEA EL MENU

// en HOME, cuando muestro varias cards. marco una como fav, saco el fav. El prox fav q 
//marco, en OTRA card, automaticamente me favea la carta q seleccione y la/s que 
// habia seleccionado antes. Asincronia ? resolver.