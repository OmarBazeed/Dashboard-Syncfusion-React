import React, { useContext, useEffect } from 'react';
import { Context } from '../contexts/ContextProvider';

import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { HiChevronDown } from "react-icons/hi2";

import avatar from '../data/avatar.jpg';
import {Cart , Notification , Chat , UserProfile} from '.';


const NavButton = ({title , customFunc , color , icon, dotColor})=>(
    <TooltipComponent content={title} position='BottomCenter'>
      <button onClick={customFunc} className='position-relative btn' style={{color , fontSize:'25px'}} >
      <span
      style={{background:dotColor , position:'absolute' , top:'15%', left:'38%'}}
      className='p-2 rounded-circle'
      />
        {icon}
      </button>
    </TooltipComponent>
)


const Navbar = () => {

const {setActiveMenue , isClicked  , handleClick , screenSize , setScreenSize , currentColor } = useContext(Context);

useEffect(()=>{

  const handleResize = ()=> setScreenSize(window.innerWidth);
  window.addEventListener('resize',handleResize);
  handleResize();

  return ()=> window.removeEventListener('resize',handleResize)
},[])

useEffect(()=>{
  if(screenSize <= 900){
    setActiveMenue(false)
  }else{
    setActiveMenue(true)
  }
},[screenSize])

  return (
  <React.Fragment>
    <div className='d-flex justify-content-between'>
    
      <div>
      <NavButton title='Menu' customFunc={ ()=> setActiveMenue(true)} color={currentColor} icon={<AiOutlineMenu />} />
      </div>
      
      <div className='d-flex navInfo' >

        <NavButton title='Cart' customFunc={ handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title='Chat' customFunc={ handleClick('chat')} color={currentColor} icon={<BsChatLeft />} dotColor='#52e7fa87' />
        <NavButton title='Notification' customFunc={handleClick('notification') } color={currentColor} icon={<RiNotification3Line />} dotColor='#52e7fa87' />

        <div className='d-flex align-items-center ms-2' style={{cursor:'pointer'}} onClick={ handleClick('userProfile') }>
          <img src={avatar} alt='avatar' className='rounded-circle me-2' style={{height:'50px',width:'50px'}} />
          <p className='mb-0'>
            <span className='text-muted'> Hi , </span>
            <span className='fw-bold text-muted'> Mickel </span>
            <HiChevronDown />
          </p>
        </div>

      </div>

    </div>

    {isClicked.cart && <Cart />}
    {isClicked.chat && <Chat />}
    {isClicked.notification && <Notification />}
    {isClicked.userProfile && <UserProfile />}


  </React.Fragment>
  )
}

export default Navbar