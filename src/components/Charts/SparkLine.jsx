import React from 'react';
import {SparklineComponent , Inject , SparklineTooltip } from '@syncfusion/ej2-react-charts'

class SparkLine extends React.Component {

  render() {

    const {id , type , color , currentColor , width , height , data} = this.props

  return(
      <SparklineComponent 
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      border={{color: currentColor , width: 2}}
      valueType='Numeric'
      fill={color}
      dataSource={data}
      xName="x"
      yName='yval'
      type={type}
      tooltipSettings={{
        visible:true,
        format:'${x}:${yval}',
        trackLineSettings:{
          visible:true
        }
      }}
      >

        <Inject services={[SparklineTooltip]} />

      </SparklineComponent>
    )
    }
}
export default SparkLine