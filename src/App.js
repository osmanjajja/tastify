import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Reset from "./auth/Reset";
import Dashboard from "./auth/Dashboard";
import SearchParams from "./pages/SearchRecipe";
import Details from "./components/Details";
import SearchByIng from "./pages/SearchByIng";
import SearchByNutrients from "./pages/SearchByNutrients";
import SearchSimilarRecipe from "./pages/SearchSimilarRecipes";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/home">Tastify!</Link>
      </header>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/reset" element={<Reset />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/home" element={<SearchParams />} />
        <Route path="/ingredients" element={<SearchByIng />} />
        <Route path="/nutrients" element={<SearchByNutrients />} />
        <Route path="/similar" element={<SearchSimilarRecipe />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
