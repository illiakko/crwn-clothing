import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.componet'



function App() {
  return (

    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/shop' component={ ShopPage } />
      </Switch>
    </div>

  );
}

export default App;
