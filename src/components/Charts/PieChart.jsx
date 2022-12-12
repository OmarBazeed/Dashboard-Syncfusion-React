import React , { useContext } from 'react';
import {AccumulationChartComponent , AccumulationSeriesCollectionDirective, AccumulationSeriesDirective ,PieSeries, Inject , AccumulationLegend , AccumulationDataLabel , AccumulationTooltip} from '@syncfusion/ej2-react-charts';
import {pieChartData} from '../../data/dummy';
import {Context} from '../../contexts/ContextProvider';

const PieChart = () => {

  const {currentMode} = useContext(Context);

  return (
      <AccumulationChartComponent
      id='charts'
      title='Project Cost Breakdown'
      legendSettings={{position:'Top'}}
      tooltip={{enable:true}}
      background={ currentMode === 'Light' ? '#fff' : '#33373E' }
      >

        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={pieChartData} type='Pie' xName='x' yName='y' dataLabel={{visible:true , name:'text' , position:'Inside'}} innerRadius='50%'>
          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>

        <Inject services={[PieSeries , AccumulationLegend, AccumulationDataLabel ,AccumulationTooltip]} />

      </AccumulationChartComponent>
  )
}

export default PieChart;