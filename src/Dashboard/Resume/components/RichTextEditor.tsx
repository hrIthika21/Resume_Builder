import React, { useState } from 'react'
import {
    Editor,
    EditorProvider,
    BtnBold,
    BtnBulletList,
    BtnClearFormatting,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnRedo,
    BtnStrikeThrough,
    BtnStyles,
    BtnUnderline,
    BtnUndo,
    HtmlButton,
    Separator,
    Toolbar,
  } from 'react-simple-wysiwyg';

interface RichTextEditorProps {
    onRichEditorChange: (value: string) => void; 
}
  
const RichTextEditor : React.FC<RichTextEditorProps>= ({onRichEditorChange})=>{
    const [value,setValue] = useState<string>("")
  return (
    <div>
        <EditorProvider>
            <Editor value={value} onChange={(e : React.ChangeEvent<HTMLInputElement>)=>{
                const newValue = e.target.value;
                setValue(newValue)
                onRichEditorChange(newValue)
            }}>
                <Toolbar>
                    <BtnUndo />
                    <BtnRedo />
                    <Separator />
                    <BtnBold />
                    <BtnItalic />
                    <BtnUnderline />
                    <BtnStrikeThrough />
                    <Separator />
                    <BtnNumberedList />
                    <BtnBulletList />
                    <Separator />
                    <BtnLink />
                    <BtnClearFormatting />
                    <HtmlButton />
                    <Separator />
                    <BtnStyles />
                </Toolbar>
            </Editor>
        </EditorProvider>
    </div>
  )
}

export default RichTextEditor;