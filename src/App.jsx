import React from "react";
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routers/AppRouter/AppRouter";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <AppHeader/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
