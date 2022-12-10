import  React , {useContext} from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, RangeColumnSeries , DataLabel } from '@syncfusion/ej2-react-charts';
import {colorMappingData , ColorMappingPrimaryXAxis ,ColorMappingPrimaryYAxis ,rangeColorMapping } from '../../data/dummy';
import {Header} from '../../components';
import { Context } from '../../contexts/ContextProvider';



const ColorMapping = ()=>{

  const {currentMode} = useContext(Context)

  return (
    <div className="barPage p-3" style={{background : currentMode === 'Light' ? 'white' : '#bdbdbd'}} >

      <Header category="Charts" title='Color-Mapping' />

      <ChartComponent
      id="charts"
      primaryXAxis={ColorMappingPrimaryXAxis}
      primaryYAxis={ColorMappingPrimaryYAxis}
      tooltip={{enable: true}}
      chartArea={{border:{ width:0 }}}
      background={currentMode === 'Light' ? '#fff' : '#33373E'}
      title="Colored Mapping For The Project Data"
      style={{textAlign: 'center'}}
      dataSource={rangeColorMapping}
      >
        <SeriesCollectionDirective>
          {colorMappingData[0].map((item , index)=>(
            <SeriesDirective key={index} {...item}  />
          ))}
        </SeriesCollectionDirective>
        
        <Inject services={[Legend, Category, Tooltip, RangeColumnSeries , DataLabel]} />
      </ChartComponent>

    </div>
  )
}
export default ColorMapping ; 





