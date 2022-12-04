import React from 'react';
import {KanbanComponent , ColumnsDirective , ColumnDirective} from '@syncfusion/ej2-react-kanban';
import {kanbanData ,kanbanGrid} from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
  return (
    <div className='kanbanPage mx-3 pt-3 ps-3'>
    
      <Header category='App' title='Kanban' />

      <KanbanComponent
      id='kanban'
      dataSource={kanbanData}
      keyField='Status'
      cardSettings={{ contentField: 'Summary' , headerField:'Id' }}
      >
      
      <ColumnsDirective>
        {kanbanGrid.map((item, index)=>(
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      
      </KanbanComponent>
    
    </div>
  )
}

export default Kanban