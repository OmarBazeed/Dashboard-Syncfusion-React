import React, { useContext } from 'react';
import {KanbanComponent , ColumnsDirective , ColumnDirective} from '@syncfusion/ej2-react-kanban';
import {kanbanData ,kanbanGrid} from '../data/dummy';
import { Header } from '../components';
import {Context} from '../contexts/ContextProvider';

const Kanban = () => {

const {currentMode} = useContext(Context); 

  return (
    <div className='kanbanPage p-3' style={{background: currentMode === 'Light' ? 'white' : '#bdbdbd'}}>
    
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