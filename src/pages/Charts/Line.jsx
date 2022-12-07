import React from 'react';
import { useContext } from 'react';
import { LineChart , Header } from '../../components';
import { Context } from '../../contexts/ContextProvider';

const Line = () => {

  const {currentMode} = useContext(Context)

  return (
    <div className='linePage p-3' style={{background: currentMode === 'Light'? 'white' : '#bdbdbd'}}>
    
      <Header category='Chart' title='Inflaction Rate' />

      <div>
      
      <LineChart />

      </div>
    
    </div>
  )
}

export default Line