import React ,{ useContext } from 'react';
import { Header } from '../../components';
import {ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import {barCustomSeries ,barPrimaryYAxis, barPrimaryXAxis} from '../../data/dummy';
import { Context } from '../../contexts/ContextProvider';

const Bar = () => {

  const {currentMode} = useContext(Context);
  return (
    <div className='barPage p-3' style={{background: currentMode === 'Light' ? 'White':'black'}}>

    <Header category='Charts' title='Inflation Rate In Bars' />

    <ChartComponent
    id='charts'
    primaryYAxis={barPrimaryYAxis}
    primaryXAxis={barPrimaryXAxis}
    background={currentMode === 'Light' ? 'white' : 'black'}
    legendSettings={{visible:true}}
    chartArea={{border:{ width:0 }}}
    tooltip={{enable:true}}
    style={{textAlign:'center'}}
    >

      <SeriesCollectionDirective>
        {barCustomSeries.map((item , index)=>
          <SeriesDirective key={index} {...item} />
        )}
        <Inject services={[Legend, ColumnSeries , Category, Tooltip , DataLabel]} />
      </SeriesCollectionDirective>
    
    </ChartComponent>


    </div>
  )
}

export default Bar