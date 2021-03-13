import React, {useState, useEffect} from 'react';
import './App.css';
import Recipes from "./component/Recipes";
import Header from "./component/Header";
import Axios from "axios";


function App() {
  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const onInputChange = e => {
    setSearch(e.target.value)
  }

  const onSearchClick = () => {
    getRecipes();
  }

  useEffect ( () => {
     getRecipes();
  }, []);
  
  const getRecipes = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
   
    setRecipes(res.data.hits);
  }

  const APP_ID = "4759afcb";
  const APP_KEY = "1241b5b5821d881097602a1089084d66";




  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
      <div className="container">
      <Recipes resc={recipes} />
      </div>
    </div>
  );
}

export default App;
