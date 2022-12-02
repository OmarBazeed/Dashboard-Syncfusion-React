import React from 'react';
import {SparklineComponent , Inject , SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({id , type , color , currentColor , width , height , data}) => {
  return (
    <div>
      <SparklineComponent 
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      border={{color:currentColor , width: 2}}
      valueType='Numeric'
      fill={color}
      dataSource={data}
      xName="x"
      yName='y'
      type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    </div>
  )
}

export default SparkLine