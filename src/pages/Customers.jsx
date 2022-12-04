import React from 'react';
import { GridComponent , ColumnsDirective , ColumnDirective , Page , Filter , Selection , Sort , Edit , Toolbar,  Inject } from '@syncfusion/ej2-react-grids';
import {customersData , customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className='customersPage ps-3 pt-3' style={{background:'white'}}>

      <Header category='Page' title='Customers' />

      <GridComponent
      dataSource={customersData}
      allowSorting
      allowPaging
      toolbar={['Delete']}
      editSettings={{allowDeleting: true , allowEditing: true , }} 
      width='auto'
      >
      
        <ColumnsDirective>
          {customersGrid.map((item , index)=>(
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject services={[Page , Filter , Edit , Toolbar , Selection , Sort ]} />
    
      </GridComponent>
    
    </div>
  )
}

export default Customers