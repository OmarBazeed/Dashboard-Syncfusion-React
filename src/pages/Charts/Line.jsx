import React from 'react';
import { LineChart , Header } from '../../components';

const Line = () => {
  return (
    <div className='linePage p-3' style={{background:'white'}}>
    
    <Header category='Chart' title='Inflaction Rate' />

    <div>
    
    <LineChart />

    </div>
    
    </div>
  )
}

export default Line