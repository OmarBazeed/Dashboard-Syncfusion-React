import React ,{ useContext } from 'react';
import { Header } from '../../components';
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Tooltip, BarSeries} from '@syncfusion/ej2-react-charts';
import {barCustomSeries , barPrimaryXAxis ,barPrimaryYAxis} from '../../data/dummy';
import { Context } from '../../contexts/ContextProvider';

const Bar = () => {

  const {currentMode} = useContext(Context);
  return (
    <div className='barPage p-3' style={{background: currentMode === 'Light' ? 'White':'black'}}>

    <Header category='Charts' title='Inflation Rate In Bars' />

    <ChartComponent
    id='charts'
    primaryXAxis={barPrimaryXAxis}
    primaryYAxis={barPrimaryYAxis}
    tooltip={{enable:true}}
    height='420px'
    background={currentMode === 'Light' ? 'white' : 'black'}
    chartArea={{border:{width:0}}}
    >

      <SeriesCollectionDirective>
        {barCustomSeries.map((item , index)=>
          <SeriesDirective key={index} {...item} />
        )}
        <Inject services={[Legend, Tooltip , BarSeries]} />
      </SeriesCollectionDirective>
    
    </ChartComponent>


    </div>
  )
}

export default Bar