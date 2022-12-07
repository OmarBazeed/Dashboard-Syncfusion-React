import React , {useContext} from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, DateTime, SplineAreaSeries,} from '@syncfusion/ej2-react-charts';
import {areaCustomSeries ,areaPrimaryXAxis,areaPrimaryYAxis} from '../../data/dummy'
import { Context } from '../../contexts/ContextProvider';
import { Header } from '../../components';


const Area = () => {

  const {currentMode} = useContext(Context);

  return (

    <div className='areaPage p-3' style={{background: currentMode === 'Light' ? 'white' : '#bdbdbd'}}>

      <Header category='Charts' title='Infaltion Rate In Percentage' />

      <ChartComponent
      id='area-chart'
      primaryXAxis={areaPrimaryYAxis}
      primaryYAxis={areaPrimaryXAxis}
      chartArea={{border:{width:0}}}
      height='420px'
      tooltip={{enable:true}}
      background={currentMode === 'Light'? '#fff' : '#33373E' }
      > 
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item , index)=>
            <SeriesDirective key={index} {...item} />
            )}
        </SeriesCollectionDirective>

        <Inject services={[Legend , DateTime , SplineAreaSeries]} />
      </ChartComponent>

    </div>
  )
}

export default Area;