import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./pages/Dashboard";
import SearchParams from "./pages/SearchRecipe";
import Details from "./components/Details";
import SearchByIng from "./pages/SearchByIng";
import SearchByNutrients from "./pages/SearchByNutrients";
import SearchSimilarRecipe from "./pages/SearchSimilarRecipes";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
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
