import React from 'react';
import {GridComponent , ColumnsDirective , ColumnDirective , Page , Search , Toolbar , Inject} from '@syncfusion/ej2-react-grids';
import {employeesData  , employeesGrid} from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className='employessPage ps-3 pt-3' style={{background:'white',}}>

    <Header category='Page' title='Employees' />

    <GridComponent
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width='auto'
    >

      <ColumnsDirective>
        {employeesGrid.map((item,index)=>(
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
    
      <Inject services={[Page, Search , Toolbar]} />

    </GridComponent>

    </div>
  )
}

export default Employees