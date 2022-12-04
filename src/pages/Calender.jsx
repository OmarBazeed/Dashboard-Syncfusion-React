import React from 'react';
import {ScheduleComponent , Day , Week , WorkWeek , Inject , Agenda , Resize , Month , DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { Header } from '../components';
import {scheduleData} from '../data/dummy'

const Calender = () => {
  return (
    <div className='calenderPage pt-3 mx-3 ps-3' style={{background:'white'}}>

    <Header category='App' title='Calender' />

    <ScheduleComponent
    height='650px'
    eventSettings={{ dataSource: scheduleData}}
    selectedDate={new Date("2022, 9 , 12")}
    >

      <Inject services={[Day , Week , WorkWeek , Month , Agenda, Resize , DragAndDrop]} />
    
    </ScheduleComponent>

    </div>
  )
}

export default Calender