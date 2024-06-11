import React, { createContext, useState } from 'react';
import Useefect from './Useefect';
import './App.module.css';
import Css from './Css';
import Com from "./componet/Com"
import Fuction from './componet/fuction';
import Incdic from './componet/incdic';
import Fist from './componet/Conseparre/fist'
import Second from './componet/Conseparre/second'
import Third from './componet/Conseparre/third'
import Four from './componet/Conseparre/four'
import Five from './componet/Conseparre/five'
import Six from './componet/Conseparre/six'
import Sevan from './componet/Conseparre/sevan'
import Eight from './componet/Conseparre/eight'
import Nine from'./componet/Conseparre/Nine'
import Ten from './componet/Conseparre/Ten';
import Header from './Counterproject/Header.jsx';

import Sidebar from './Counterproject/Sidebar.jsx';
import Footer from './Counterproject/Footer.jsx';
import Content from './Counterproject/Content.jsx';
import Onoff from './Eventhandling/Onoff.jsx'
import Sowhit from './Eventhandling/Sowhit.jsx'

import "bootstrap/dist/css/bootstrap.min.css";
import Navbarli from './boostep/Navbarli.jsx';
import Chex from './Eventhandling/Chex.jsx';
import Array from './Eventhandling/Array.jsx';
export default function App() {
  // const [show, setShow] = useState(true);


  return (

        <div >
          <Chex/>
          <Onoff/>
          <Sowhit/>
          <Array />
          <Header />
          <div className="main-content">
               <Sidebar />
               <Content />
               
             </div>
             <Footer />
        </div>
  );
}

// <Com />
//       <Fuction />
//       <Incdic />
//       <Fist />
//       <Second />
//       <Third />
//       <Four />
//       <Five/>
//       <Six/>
//       <Sevan />
//       <Eight/>
//       <Nine />
//       <Ten/
// <Header />className="container"
//           <div className="main-content">
//               <Sidebar />
//               <Content />
               
//             </div>
//             <Footer />
//             <Incdic />
//             <Onoff />
//             <Sowhit />
