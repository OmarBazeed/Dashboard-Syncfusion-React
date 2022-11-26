import React from 'react';
import {Link , NavLink} from 'react-router-dom';
import {SiShopware} from 'react-icons/si';
import {MdOutlineCancel} from 'react-icons/md';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import {links} from '../data/dummy';


const Sidebar = ({setActiveMenue}) => {

  const activeLink = 'bg-secondary bg-gradient bg-opacity-25 rounded-3 d-block ';
  const normalLink = 'rounded-3 d-block';

  return (
    <div className='mainDiv'>

    <Link to='/'>

      <div className='d-flex align-items-center logo fw-bold fs-5 ms-2 justify-content-between my-2'>
        <div>
          <SiShopware />
          <span className=''> Shoppy </span> 
        </div>

        <TooltipComponent content='close menue' position='TopCenter' >
          <button className='btn' style={{fontSize:'25px'}} onClick={()=>{setActiveMenue(false)}}>
          <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>

    </Link>

    <div className='d-flex flex-column ps-3'>
      { links.map((item)=>{
        return(
          <div key={item.title} className='my-3'>
            <p className='mb-3 text-muted'> {(item.title).toUpperCase()}</p>

              { item.links.map(ele=>(
                <NavLink to={ele.name} key={ele.name} className={ ({isActive})=> isActive ?  activeLink : normalLink }>
                <div className='d-flex align-items-center ps-2 my-2' style={{paddingTop:'10px'}}>
                <p className='me-3 text-primary'>{ele.icon}</p>
                <p className='text-capitalize'>{ele.name}</p>
                </div>
                </NavLink>
                ))}

          </div>
        )
      })}
    </div>

    
    
    </div>
  )
}

export default Sidebar