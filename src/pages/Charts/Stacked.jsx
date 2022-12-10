import  React , {useContext} from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, StackingColumnSeries , DataLabel } from '@syncfusion/ej2-react-charts';
import {stackedCustomSeries , stackedPrimaryXAxis ,stackedPrimaryYAxis } from '../../data/dummy';
import {Header} from '../../components';
import { Context } from '../../contexts/ContextProvider';



const Stacked= ()=>{

  const {currentMode} = useContext(Context)

  return (
    <div className="barPage p-3" style={{background : currentMode === 'Light' ? 'white' : '#bdbdbd'}} >

      <Header category="Charts" title='Stacked' />

      <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      tooltip={{enable: true}}
      chartArea={{border:{ width:0 }}}
      background={currentMode === 'Light' ? '#fff' : '#33373E'}
      title="Project Cost Breakdown"
      style={{textAlign: 'center'}}
      >
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item , index)=>(
            <SeriesDirective key={index} {...item}  />
          ))}
        </SeriesCollectionDirective>
        
        <Inject services={[Legend, Category, Tooltip, StackingColumnSeries , DataLabel]} />
      </ChartComponent>

    </div>
  )
}
export default Stacked; 





