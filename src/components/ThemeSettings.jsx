import React from 'react';
import {MdOutlineCancel} from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {themeColors} from '../data/dummy';

import { Context } from '../contexts/ContextProvider';
import { useContext } from 'react';


const ThemeSettings = () => {

  const {currentColor ,setCurrentColor , setShowSettings , currentMode , setCurrentMode } = useContext(Context);

  return (
  <div className='px-3' style={{position:'absolute' , top:'0', right:'0' , height:'100vh',background: currentMode === 'Light' ? '#fff' : '#33373E',width:'300px',boxShadow:'grey -4px 0px 9px 0px',borderTopLeftRadius:'20px',borderBottomLeftRadius:'20px',transition:'.5s',zIndex:'100'}} >

      <div className='d-flex align-items-center justify-content-between flex-wrap mt-4'>
        <p className='fs-5 text-muted fw-semibold mb-0'> Settings</p>
        <TooltipComponent content='Close Settings' position='TopCenter'>
          <button className='btn' onClick={()=>{setShowSettings(false)}} style={{borderRadius:'50%',fontSize:'25px'}}>
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div> 

      <hr className='text-muted' />
        
      <div >

        <p className='fs-5 text-muted fw-semibold'> Theme Options</p>

        <div className='mb-2'>
          <input
          type='radio'
          id='light'
          value='Light'
          onChange={(e)=>{
            setCurrentMode(e.target.value);
            localStorage.setItem('theme-mode',e.target.value)
          }}
          name='theme'
          className='me-2'
          checked={currentMode === 'Light'}
          />
          <label htmlFor='light'>Light </label>
        </div>

        <div>
          <input
          type='radio'
          id='dark'
          value='Dark'
          onChange={(e)=>{
            setCurrentMode(e.target.value);
            localStorage.setItem('theme-mode',e.target.value)
          }}
          name='theme'
          className='me-2'
          checked={currentMode === 'Dark'}
          />
          <label htmlFor='dark'>Dark </label>
        </div>

      </div>

      <hr className='text-muted' />

      <div>
        <p className='fw-semibold fs-5 text-muted' text-muted >Theme Colors</p>
        <div className='d-flex'> 
        { themeColors.map((item,index)=>(
          <TooltipComponent content={item.name} position='TopCenter' key={index}> 
            <button  style={{background:item.color}} className='rounded-circle p-2 text-light fw-semibold mx-1 fs-6' 
            onClick={()=>{
              setCurrentColor(item.color);
              setShowSettings(false);
              localStorage.setItem('current-color',item.color)
            }}>
              <BsCheck  style={{display: currentColor === item.color ? 'block' : 'none'}}/> 
            </button>
          </TooltipComponent>
        ))}
        </div>
      </div>

  </div> 
)
}

export default ThemeSettings