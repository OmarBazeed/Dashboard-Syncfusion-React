import React , {useContext} from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationDataLabel, AccumulationTooltip, PieSeries , Legend , Inject} from '@syncfusion/ej2-react-charts';
import {pieChartData} from '../../data/dummy';
import {Context} from '../../contexts/ContextProvider'

const PieChart = () => {

const {currentMode} = useContext(Context);

  return (

    <AccumulationChartComponent
    id='charts'
    tooltip={{enable:true}}
    background={ currentMode === 'Light' ? 'white' : '#bdbdbd'}
    height='420px'
    chartArea={{border:{ width:0 }}}

    >
      <AccumulationSeriesCollectionDirective>
        {pieChartData.map((item , index )=>
        <AccumulationSeriesDirective key={index} {...item} />
        )}
      </AccumulationSeriesCollectionDirective>

      <Inject services={[Legend , AccumulationTooltip , PieSeries ,AccumulationDataLabel ]} />

    </AccumulationChartComponent>
    
  )
}

export default PieChart;