
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from './components/Header';

import { useCallback } from 'react';


function App() {

 
  return (
    <div className="App">
        
       
        <Navbar/>
        <Header/>
    </div>
  );
}

export default App;
