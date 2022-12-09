import React ,{ useContext } from 'react';
import {AccumulationChartComponent , AccumulationSeriesCollectionDirective, AccumulationSeriesDirective} from '@syncfusion/ej2-react-charts';
import {pieChartData} from '../../data/dummy';
import { Context } from '../../contexts/ContextProvider';


const PieChart = () => {

const {currentMode} = useContext(Context);

  return (
      <AccumulationChartComponent
      id='charts'
      background={currentMode === 'Light' ? '#fff' : '#33373E'}
      >
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' innerRadius='40%'>
          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
  )
}

export default PieChart;