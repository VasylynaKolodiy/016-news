import React from "react";
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routers/AppRouter/AppRouter";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Header/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
