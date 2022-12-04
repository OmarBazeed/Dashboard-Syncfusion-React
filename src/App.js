import React, { useContext } from "react";
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineBars } from "react-icons/ai";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';

import { Context } from "./contexts/ContextProvider";

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calender, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';


const  App = ()=> {

  const {activeMenue , setActiveMenue} = useContext(Context);

  return (

  <div>
    <BrowserRouter>

      <div className="tooltipSettings" style={{position:'fixed',right:'20px',bottom:'20px',zIndex:'10000'}}>
        <TooltipComponent content='Settings' position="Top">
          <button className="btn rounded-circle" style={{height:'45px',width:'45px',fontSize:'20px',color:'black',lineHeight:'24px',background:'blue',color:'white'}}>
            <FiSettings />
          </button>
        </TooltipComponent> 
      </div>

      { activeMenue ? (
        <div className="opendSideBar" style={{position:'fixed',top:'0',left:'0',height:'100vh',width:'250px',background:'rgb(245 242 242 / 37%)',transition:'.7s',overflow:'scroll'}}>
        <Sidebar />
        </div>
      ) : (
        <div className="opendSideBar" style={{position:'fixed',top:'0',left:'-100%',height:'100vh',transition:'.7s',overflow:'scroll'}}>
        <Sidebar />
        </div>
      )
      }


      <section className="d-flex flex-column" style={{background:'#e8ffff5e', marginLeft: activeMenue ? '250px':'0',transition:'.7s',height:'100vh'}}>
        <div className={activeMenue ? 'w-75':'w-100'} style={{transition:'.7s'}}>
          <Navbar />
        </div>

        <div className="mx-3">
          <Routes>

          {/* dashboard  */}
          <Route path="/" element={(<Ecommerce />)} />
          <Route path="/ecommerce" element={(<Ecommerce />)} />

          {/* pages  */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />

          {/* apps  */}
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/calendar" element={<Calender />} />
          <Route path="/color-picker" element={<ColorPicker />} />

          {/* charts  */}
          <Route path="/line" element={<Line />} />
          <Route path="/area" element={<Area />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/color-mapping" element={<ColorMapping />} />
          <Route path="/pyramid" element={<Pyramid />} />
          <Route path="/stacked" element={<Stacked />} />

          </Routes>
        </div>
      </section>
    </BrowserRouter>
  </div>
  );
}

export default App;
