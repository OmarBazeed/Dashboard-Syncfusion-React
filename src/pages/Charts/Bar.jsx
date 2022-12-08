import  React , {useContext} from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import {barCustomSeries , barPrimaryXAxis ,barPrimaryYAxis } from '../../data/dummy';
import {Header} from '../../components';
import { Context } from '../../contexts/ContextProvider';



const Bar = ()=>{

  const {currentMode} = useContext(Context)

  return (
    <div className="barPage p-3" style={{background : currentMode === 'Light' ? 'white' : '#bdbdbd'}} >

      <Header category="Charts" title='Bar Chart' />

      <ChartComponent
      id="charts"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      tooltip={{enable: true}}
      chartArea={{border:{ width:0 }}}
      background={currentMode === 'Light' ? '#fff' : '#33373E'}
      title="Olympics Medal Counts - RIO"
      style={{textAlign: 'center'}}
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





