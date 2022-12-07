import React , {useContext} from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Tooltip, DateTime, LineSeries} from '@syncfusion/ej2-react-charts';
import {lineCustomSeries ,LinePrimaryXAxis,LinePrimaryYAxis} from '../../data/dummy'
import { Context } from '../../contexts/ContextProvider';

const LineChart = () => {

  const {currentMode} = useContext(Context);

  return (
    <ChartComponent
    id='line-chart'
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    tooltip={{enable:true}}
    chartArea={{border:{width:0}}}
    height='420px'
    background={currentMode === 'Light'? '#fff' : '#33373E' }
    >
    
    <SeriesCollectionDirective>
      {lineCustomSeries.map((item , index)=>
        <SeriesDirective key={index} {...item} />
        )}
    </SeriesCollectionDirective>

    <Inject services={[Legend , Tooltip, DateTime ,LineSeries]} />
    </ChartComponent>
  )
}

export default LineChart