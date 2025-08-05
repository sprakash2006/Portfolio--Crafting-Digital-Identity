import { useState } from 'react';
import './App.css';
import Header from "./components/header";
import Home from "./pages/intro.jsx";

function App() {
  return (
    <div>
      <Header />
      <Home />
    </div>
  )
}

export default App;