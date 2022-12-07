import React , {useContext} from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Inject , Legend , Tooltip } from '@syncfusion/ej2-react-charts';
import {pieChartData} from '../../data/dummy';
import {Context} from '../../contexts/ContextProvider'

const PieChart = () => {

const {currentMode} = useContext(Context);

  return (

    <AccumulationChartComponent
    id='charts'
    tooltip={{enable:true}}
    background={ currentMode === 'Light' ? 'white' : '#bdbdbd'}
    dataSource={pieChartData}
    >


      <Inject services={[Legend , Tooltip , PieSeries ]} />

    </AccumulationChartComponent>
    
  )
}

export default PieChart;