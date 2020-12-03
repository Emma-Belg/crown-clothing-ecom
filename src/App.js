import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom';

import './App.css';

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () =>(
    <div>
        <h1>Hats</h1>
    </div>
)

function App() {
  return (
    <div>
        <BrowserRouter>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/hats' component={HatsPage}/>
        </BrowserRouter>

      {/*<HomePage />*/}
    </div>
  );
}

export default App;
