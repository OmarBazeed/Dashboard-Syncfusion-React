import React ,{useContext} from 'react';
import {ChartComponent , SeriesCollectionDirective , SeriesDirective , Inject , HiloSeries , DateTime , Tooltip , Crosshair  } from '@syncfusion/ej2-react-charts';
import {financialChartData , FinancialPrimaryXAxis , FinancialPrimaryYAxis } from '../../data/dummy';
import { Header } from '../../components';
import { Context } from '../../contexts/ContextProvider';

const Financial = () => {
  const {currentMode} = useContext(Context);
  return (
    <div className='areaPage p-3' style={{background: currentMode === 'Light' ? 'white' : '#bdbdbd'}}>

      <Header category='Charts' title='Financial' />

      <ChartComponent
      title='AAPL Historical'
      primaryXAxis={FinancialPrimaryXAxis}
      primaryYAxis={FinancialPrimaryYAxis}
      tooltip={{enable: true}}
      crosshair={{enable: true , lineType:'Vertical'}}
      >
      
        <SeriesCollectionDirective>
        <SeriesDirective dataSource={financialChartData} type='Hilo' xName='x' high='high' low='low' name='Apple Inc' >
        
        </SeriesDirective>
        </SeriesCollectionDirective>
        
        <Inject services={[Tooltip , HiloSeries , DateTime , Crosshair]} />

      </ChartComponent>
    
    </div>
  )
}

export default Financial