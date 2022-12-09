import React  from 'react';
import {AccumulationChartComponent , AccumulationSeriesCollectionDirective, AccumulationSeriesDirective ,PieSeries, Inject , AccumulationLegend , AccumulationDataLabel , AccumulationTooltip} from '@syncfusion/ej2-react-charts';
import {pieChartData} from '../../data/dummy';



const PieChart = () => {



  return (
      <AccumulationChartComponent
      id='charts'
      title='Project Cost Breakdown'
      legendSettings={{position:'Top'}}
      tooltip={{enable:true}}
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