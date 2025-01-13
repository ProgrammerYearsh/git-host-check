import React, { useCallback, useEffect, useMemo, useState } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import {
  Editor,
  Transforms,
  createEditor,
  Element as SlateElement,
} from 'slate'
import { withHistory } from 'slate-history'
import { Button, Icon, Toolbar } from './SlateNotepadTools'
import { useNavigate } from 'react-router'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}
const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']
const SlateNotepad = ({ dynamicHeight}) => {
  const navigate=useNavigate()
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])


  const [noteValue, setNoteValue] = useState( [{ type: 'paragraph', children: [{ text: '' }] }]);
  const [noteUpdateStatus, setNoteUpdateStatus] = useState(false);  

  useEffect(() => {
    const data = localStorage.getItem("binaryDecData");
    const parsedData = JSON.parse(data)
    if(!data){ //for first time users
      setNoteValue([{ type: 'paragraph', children: [{ text: '' }] }])
      setNoteUpdateStatus(true)
    } else if (parsedData && parsedData.length !== 0) { // for returning users 
      setNoteValue(parsedData); 
      setNoteUpdateStatus(true)
    } else if(parsedData && parsedData.length === 0) { // for users with clean slate
      setNoteValue([{ type: 'paragraph', children: [{ text: '' }] }])
      setNoteUpdateStatus(true)
    }
  }, []);

  console.log(noteUpdateStatus)

  const handleChange = () => {
    const value = editor.children;
    localStorage.setItem("binaryDecData", JSON.stringify(value));
  }

  return ( 
    <div className=' rounded-lg bg-mattBlack p-2 ' >

      {
        !noteUpdateStatus  ? <></> : 
        <Slate  editor={editor} initialValue={noteValue} onChange={handleChange}>
        <Toolbar >
          <MarkButton 
          format="bold"  icon="Bold" 
          svgPath={<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"/>}
          />
          <MarkButton
          svgPath={<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"/>}
          format="italic" icon="Italic" />

          <MarkButton
          svgPath={ <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"/>}
          format="underline" icon="Underline"
           />


          <BlockButton format="heading-one" icon="h1" 
          srcPath={'/images/heading-one.png'}
          />
          <BlockButton format="heading-two" icon="h2"
          srcPath={'/images/heading-two.png'}
          />
          <BlockButton format="numbered-list" icon="Number list" 
          srcPath={'/images/bullet-list-icon.png'} 
          />
          <BlockButton format="bulleted-list" icon="Bullet list" 
          srcPath={'/images/number-list.png'}
          />
        </Toolbar>
        <Editable
        style={dynamicHeight ? {height: dynamicHeight} : {height: '350px'}}
          // onInput={handleChange}
          // onChange={handleChange}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
          spellCheck
          onKeyDown={event => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault()
                const mark = HOTKEYS[hotkey]
                toggleMark(editor, mark)
              }
            }
          }}
        />
      </Slate>
      }
 
      
    </div>
  )
}
const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
  )
  const isList = LIST_TYPES.includes(format)
  Transforms.unwrapNodes(editor, {
    match: n =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  })
  let newProperties
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    }
  } else {
    newProperties = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    }
  }
  Transforms.setNodes(editor, newProperties)
  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}
const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)
  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}
const isBlockActive = (editor, format, blockType = 'type') => {
  const { selection } = editor
  if (!selection) return false
  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: n =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  )
  return !!match
}
const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}
const Element = ({ attributes, children, element }) => {
  let style = {};

  // Define custom styles for specific elements
  switch (element.type) {
    case 'heading-one':
      style = { fontSize: 42, fontWeight: '700' }; // Custom style for H1
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );

    case 'heading-two':
      style = { fontSize: 32, fontWeight: '600' }; // Custom style for H2
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );

    case 'bulleted-list':
      style = { listStyleType: 'disc', paddingLeft: '20px' }; // Custom style for UL
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );

    case 'numbered-list':
      style = { listStyleType: 'decimal', paddingLeft: '20px' }; // Custom style for OL
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      );

    case 'list-item':
      style = { marginBottom: '5px' }; // Custom style for list items
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );

    default:
      style = { textAlign: element.align || 'left' }; // Default style
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }
  if (leaf.code) {
    children = <code>{children}</code>
  }
  if (leaf.italic) {
    children = <em>{children}</em>
  }
  if (leaf.underline) {
    children = <u>{children}</u>
  }
  return <span {...attributes}>{children}</span>
}
const BlockButton = ({ format, icon , srcPath }) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type'
      )}
      onMouseDown={event => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
     <img className=' w-5 h-5' src={srcPath} />
    </Button>
  )
}
const MarkButton = ({ format, icon, svgPath }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
  <svg 
  className="w-5 h-5" 
  aria-hidden="true" 
  xmlns="http://www.w3.org/2000/svg" 
  width="24"
  height="24"
  fill="none"
  viewBox="0 0 24 24">
  {svgPath}
  </svg>
    </Button>
  )
}
const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  }, 
  {
    type: 'paragraph',
    children: [
      {
        text: "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text: ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    align: 'center',
    children: [{ text: 'Try it out for yourself!' }],
  },
]

const extractedInitialValue = [{"type":"heading-one","children":[{"text":"This is heading "}]},{"type":"heading-two","children":[{"text":"This is subheading "}]},{"type":"paragraph","children":[{"text":"Bold text","bold":true}]},{"type":"paragraph","children":[{"text":"Italic Text","italic":true}]},{"type":"paragraph","children":[{"text":"Underline Text","underline":true}]},{"type":"numbered-list","children":[{"type":"list-item","children":[{"text":"Number list one "}]},{"type":"list-item","children":[{"text":"two "}]},{"type":"list-item","children":[{"text":"three"}]}]},{"type":"bulleted-list","children":[{"type":"list-item","children":[{"text":"Bullet list one "}]},{"type":"list-item","children":[{"text":"two "}]},{"type":"list-item","children":[{"text":"three"}]}]}]
export default SlateNotepad