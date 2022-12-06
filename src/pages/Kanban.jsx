import React from 'react';
import {KanbanComponent , ColumnsDirective , ColumnDirective} from '@syncfusion/ej2-react-kanban';
import {kanbanData ,kanbanGrid} from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
  return (
    <div className='kanbanPage p-3' style={{background:'white'}}>
    
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