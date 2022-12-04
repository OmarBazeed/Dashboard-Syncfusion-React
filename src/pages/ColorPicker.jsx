import React from 'react';
import {ColorPickerComponent} from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const ColorPicker = () => {

const change = (e)=>{
  document.getElementById('preview').style.backgroundColor = e.currentValue.hex ;
}

  return (
    <div className='colorpickerPage mx-3 pt-3 ps-3' style={{background:'white',overflow:'hidden'}}>

      <Header category='App' title='ColorPicker' />

      <div className='text-center'>
      
        <div id='preview' />

        <div className='d-flex justify-content-center align-items-center flex-wrap'>
          <div className='me-4 mb-4'>
            <p className='fs-5 fw-semibold'> Inline-Pallete</p>
            <ColorPickerComponent
            id='iniline-pallete'
            mode='Palette'
            modeSwitcher={false}
            showButtons={false}
            inline
            change={change}
            />
          </div>

          <div className='me-4 mb-4'>
            <p className='fs-5 fw-semibold'> Inline-Picker </p>
            <ColorPickerComponent
            id='iniline-pallete'
            modeSwitcher={false}
            showButtons={false}
            inline
            change={change}
            />
          </div>
        </div>
      
      </div>
    
    </div>
  )
}

export default ColorPicker