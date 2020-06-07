import React from 'react';
import './App.css';
import Top from './Components/Mainmenu'
import Topfunc from './Components/Topfunc'
import Menu from './Components/menu'
import Corona from './Components/corona'
import About from './Components/about'
import Products from './Components/products'
import Achieve from './Components/achieve'
import Customers1 from './Components/customers1'
import Buy from './Components/buy'
function App() {
  return (
  <div className="App">
    <Top/>
    <Menu/>
    <Corona/>
    <About/>
    <Products/>
    <Achieve/>
    <Customers1/>
    <Buy/>
  </div>
  );
}

export default App;
