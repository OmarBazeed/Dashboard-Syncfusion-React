import  React , {useContext} from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import {Header} from '../../components';
import { Context } from '../../contexts/ContextProvider';
import {barCustomSeries , barPrimaryXAxis ,barPrimaryYAxis } from '../../data/dummy';


const Bar = ()=>{

  const {currentMode} = useContext(Context)

  return (
    <div className="barPage p-3" style={{background : currentMode === 'Light' ? 'white' :'black'}} >

      <Header category="Charts" title='anything' />

      <ChartComponent
      id="charts"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      tooltip={{enable: true}}
      chartArea={{border:{ width:0 }}}
      >
      
      <SeriesCollectionDirective>
      {barCustomSeries.map((item , index)=>(
        <SeriesDirective key={index} {...item}  />
      ))}
      </SeriesCollectionDirective>
      
      <Inject services={[Legend, Category, Tooltip, ColumnSeries, DataLabel]} />

      </ChartComponent>

    </div>
  )
}
export default Bar ; 





