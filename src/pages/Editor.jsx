import React from 'react';
import { RichTextEditorComponent , Image , Link , HtmlEditor , QuickToolbar, Toolbar , Inject } from '@syncfusion/ej2-react-richtexteditor';
import { Header } from '../components';
import {EditorData} from '../data/dummy'
const Editor = () => {
  return (
    <div className='editorPage p-3' style={{background:'white'}}> 

      <Header category='App' title='Editor' />

      <RichTextEditorComponent>

        <EditorData />
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
        
      </RichTextEditorComponent>
      
    </div>
  )
}

export default Editor