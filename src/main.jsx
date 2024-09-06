import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import EducationalContent from './components/EducationalContent/EducationalContent.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import Calc from './components/CarbonFootprintCalc/Calc.jsx'
import Weather from "./components/Weather/Weather.jsx";
import Contact from './components/Contact/Contact.jsx'
import Documentation from "./components/Documentation/Documentation.jsx";
import StartForFree from "./components/StartForFree/Startforfree.jsx";

import ImpactChart from "./components/ImpactChart.jsx";




const router = createBrowserRouter(
  createRoutesFromElements(
    
  <Route path="/" element={<Layout />}>
       <Route path="" element={<Home />} /> 
       <Route path="/EducationalContent" element={<EducationalContent/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/Testimonials" element={<Testimonials/>}/>
       <Route path="/Calc" element={<Calc/>}/>
       <Route path="/Weather" element={<Weather/>}/>
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="/Documentation" element={<Documentation/>}/>
       <Route path="/Startforfree" element={<StartForFree/>}/>
       <Route path="/ImpactChart" element={<ImpactChart/>}/>
       
    </Route>
    
  
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
