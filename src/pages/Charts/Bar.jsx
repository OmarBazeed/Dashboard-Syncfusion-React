import React ,{ useContext } from 'react';
import { Header } from '../../components';
// import {} from 'syncfusion/ej2-react-charts';
// import {} from '../../data/dummy';
import { Context } from '../../contexts/ContextProvider';

const Bar = () => {

  const {currentMode} = useContext(Context);
  return (
    <div>Bar</div>
  )
}

export default Bar