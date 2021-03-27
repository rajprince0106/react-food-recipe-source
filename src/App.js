/*import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
//import Axios from "axios";

function App() {
  const [search, setSerach] = useState("chiken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "YOUR_APPLICATION_ID";
  const APP_KEY = "YOUR_APPLICATION_KEY";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;*/



import React, { useState, setSearch, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";



/*const search = useRef("");

<input 
    className="search-bar"
    type="text"
    ref={search}
/>

const getSearch = (e) => {
  e.preventDefault();
  setClicked(true);
  setQuery(search.current.value);
  isColor();
};

if(search.current.value){
  setQuery();
}*/

function App() {
  
  const [search, setsearch] = useState("chiken");
  const [recipes, setRecipes] = useState([]);
 
  const APP_ID = "dfb06472";
  const APP_KEY = "1875c826dcff9ed52a832b11dae1cc88";  

  useEffect( async () => {
       getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    console.log(res);
    setRecipes(res.data.hits);

  }

  const onInputChange = e => {
       setSearch(e.target.value);
  }
  return (
    <div className="App">
       <Header search={search} onInputChange={onInputChange} />
      
       <div className="container">
       <Recipes recipes={recipes} />
       </div>
      

    </div>
  );
}

export default App;
