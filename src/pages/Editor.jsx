import React, { useContext } from 'react';
import { RichTextEditorComponent , Image , Link , HtmlEditor , QuickToolbar, Toolbar , Inject } from '@syncfusion/ej2-react-richtexteditor';
import { Header } from '../components';
import {EditorData} from '../data/dummy';
import {Context} from '../contexts/ContextProvider';

const Editor = () => {

    const {currentMode} = useContext(Context);

  return (
    <div className='editorPage p-3' style={{background: currentMode === 'Light' ? 'white' : '#bdbdbd'}}> 

      <Header category='App' title='Editor' />

      <RichTextEditorComponent>

        <EditorData />
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
        
      </RichTextEditorComponent>
      
    </div>
  )
}

export default Editor