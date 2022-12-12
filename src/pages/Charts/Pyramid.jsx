import React, { useContext }  from 'react';
import {AccumulationChartComponent , AccumulationSeriesCollectionDirective, AccumulationSeriesDirective ,PyramidSeries, Inject , AccumulationLegend , AccumulationDataLabel , AccumulationTooltip} from '@syncfusion/ej2-react-charts';
import {PyramidData} from '../../data/dummy';
import { Context } from '../../contexts/ContextProvider';
import { Header } from '../../components';



const Pyramid = () => {

const {currentMode} = useContext(Context)

  return (
    <div className='pyramidPage p-3' style={{background: currentMode === 'Light' ? 'white' : '#bdbdbd'}}>

      <Header category='Charts' title='Pyramid' />

      <AccumulationChartComponent
      id='charts'
      title='Food Comparison Chart'
      legendSettings={{position:'Top'}}
      tooltip={{enable:true}}
      background={currentMode === 'Light' ? '#fff' : '#33373E'}
      >

        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={PyramidData} type='Pyramid' xName='x' yName='y' dataLabel={{visible:true , name:'text' , position:'Inside'}}>
          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>

        <Inject services={[PyramidSeries , AccumulationLegend, AccumulationDataLabel ,AccumulationTooltip]} />

      </AccumulationChartComponent>

      </div>
  )
}

export default Pyramid;