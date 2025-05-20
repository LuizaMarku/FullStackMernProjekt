import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './NavBar';
import Kreu from './Kreu'; 
import RethNesh from './RethNesh';
import Karriera from './Karriera';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import FooterCom from './FooterCom';
import FormContact from './FormContact';
import ReadAllItem from './ReadAllItems';
import CreateItem from './CreateItem';
import ReadOneItem from './ReadOneItem';
import UpdateItem from './UpdateItem';
function App() {
  return (
<>

      <NavBar/>
      <Routes>
        
<Route path="/" element={<Kreu/>} />
<Route path="/rreth_nesh" element={<RethNesh/>} />
<Route path="/projektet_tona" element={<ReadAllItem />} />
<Route path="/bej_karriere_me_ne" element={<Karriera/>} />
<Route path="/na_kontaktoni" element={<FormContact/>} />
<Route path="/createItem/" element={<CreateItem/>}/>
<Route path="/readOneItem/:id/" element={<ReadOneItem/>}/>
<Route path="/updateItem/:id/" element={<UpdateItem/>}/>

</Routes>
<FooterCom/>
   
</>
  );

}

export default App;
