import React , { useContext } from 'react';
import {GridComponent , ColumnsDirective , ColumnDirective ,  Resize , Sort , ContextMenu , Filter , Page , ExcelExport , PdfExport , Edit , Inject} from '@syncfusion/ej2-react-grids';
import {ordersData  , ordersGrid} from '../data/dummy';
import { Header } from '../components';
import {Context} from '../contexts/ContextProvider';



const Orders = () => {

  const {currentMode} = useContext(Context);

  return (
    <div className='ordersPage p-3' style={{background: currentMode === 'Light' ? 'white' : '#bdbdbd'}}>

    <Header category='Page' title='Orders' />

    <GridComponent
      id='gridcomp'
      dataSource={ordersData}
      allowPaging
      allowSorting
    >

      <ColumnsDirective>
        {ordersGrid.map((item,index)=>(
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
    
      <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit,  PdfExport]} />

    </GridComponent>

    </div>
  )
}

export default Orders