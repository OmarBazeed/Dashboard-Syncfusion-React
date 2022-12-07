import React, {useContext} from 'react';
import { Header , PieChart} from '../../components';
import { Context } from '../../contexts/ContextProvider';

const Pie = () => {

  const {currentMode} = useContext(Context);

  return (

    <div className='piePage p-3' style={{background: currentMode === 'Light' ? 'white' : '#bdbdbd'}}>
    
      <Header category='Charts' title='Infaltion Rate In Pie' />

      <PieChart />
    
    </div>
  )
}

export default Pie;