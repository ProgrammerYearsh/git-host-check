import React, { useEffect, useState } from 'react'
import { Editor } from 'https://esm.sh/@tiptap/core@2.6.6';
import StarterKit from 'https://esm.sh/@tiptap/starter-kit@2.6.6';
import Highlight from 'https://esm.sh/@tiptap/extension-highlight@2.6.6';
import Underline from 'https://esm.sh/@tiptap/extension-underline@2.6.6';
import Subscript from 'https://esm.sh/@tiptap/extension-subscript@2.6.6';
import Superscript from 'https://esm.sh/@tiptap/extension-superscript@2.6.6';
import TextStyle from 'https://esm.sh/@tiptap/extension-text-style@2.6.6';
import FontFamily from 'https://esm.sh/@tiptap/extension-font-family@2.6.6';
import { Color } from 'https://esm.sh/@tiptap/extension-color@2.6.6';
import Bold from 'https://esm.sh/@tiptap/extension-bold@2.6.6';
// import './NotepadScript.js'

function Notepad() {

    const [notePadTexts, setNotePadTexts] = useState(`<p><span><span style="font-weight: bold;">Welcome to Binary Decimal</span></span></p><p></p><p>Add all your Notes and Calculation here by</p><p></p><p><mark>Highlighting text   </mark><em>Making Text Italic   </em><u>Underlining them   </u><s>Striking out the text  </s>Adding Square and all 2<sup>2 &amp; </sup>3<sub>1</sub></p><p></p><p><span><em><span style="font-weight: bold;"><mark><u>Or Using them All together</u></mark></span></em></span></p><p></p><p><span><span style="font-weight: bold;"><u>Try your way </u></span></span></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p><span><span style="font-weight: bold;"><u>.</u></span></span></p><p></p>`)
    // `<strong>Note Making Application</strong><p>Simplify your challenges with our powerful editor.</p><p>Highlighted section</p>`

    useEffect(() => {
        const FontSizeTextStyle = TextStyle.extend({
          addAttributes() {
            return {
              fontSize: {
                default: null,
                parseHTML: (element) => element.style.fontSize,
                renderHTML: (attributes) => {
                  if (!attributes.fontSize) {
                    return {};
                  }
                  return { style: `font-size: ${attributes.fontSize}` };
                },
              },
            };
          },
        });
    
        const CustomBold = Bold.extend({
          renderHTML({ HTMLAttributes }) {
            return ['span', { ...HTMLAttributes, style: 'font-weight: bold;' }, 0];
          },
          excludes: '',
        });
    
        const editor = new Editor({
          element: document.querySelector('#wysiwyg-text-example'),
          extensions: [
            StarterKit.configure({ textStyle: false, bold: false }),
            CustomBold,
            Highlight,
            Underline,
            Subscript,
            Superscript,
            TextStyle,
            FontSizeTextStyle,
            Color,
            FontFamily,
          ],
          content: notePadTexts,
          editorProps: {
            attributes: {
              class:
                'format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none min-h-[380px] h-[100%] ',
            },
          },
          onUpdate: ({ editor }) => {
            const updatedContent = editor.getHTML(); // Get the updated HTML content
            console.log('Editor content updated:', updatedContent);
            // Perform any other action, e.g., save the content to a database
          },
          onkeypress: ({ editor, event }) => {        
            if (event.key === 'Enter') {
              console.log('Enter key pressed');
            }
            console.log('Key pressed:', event);
          }
        
        });
    
        const setUpEventListeners = (id, action) => {
          document.getElementById(id)?.addEventListener('click', action);
        };
    
        setUpEventListeners('toggleBoldButton', () => editor.chain().focus().toggleBold().run());
        setUpEventListeners('toggleItalicButton', () => editor.chain().focus().toggleItalic().run());
        setUpEventListeners('toggleUnderlineButton', () => editor.chain().focus().toggleUnderline().run());
        setUpEventListeners('toggleStrikeButton', () => editor.chain().focus().toggleStrike().run());
        setUpEventListeners('toggleSubscriptButton', () => editor.chain().focus().toggleSubscript().run());
        setUpEventListeners('toggleSuperscriptButton', () => editor.chain().focus().toggleSuperscript().run());
        setUpEventListeners('toggleHighlightButton', () => {
          const isHighlighted = editor.isActive('highlight');
          editor
            .chain()
            .focus()
            .toggleHighlight({ color: isHighlighted ? undefined : '#ffc078' })
            .run();
        });
    
        return () => editor.destroy();
      }, []);


  return (

<div style={{height : '100%'}} className="w-full border border-gray-200 rounded-lg  bg-mattBlack min-h-full h-full ">
    <div className="px-3 py-2 border-b dark:border-gray-600">
        <div className="flex flex-wrap items-center">
            <div className="flex items-center space-x-1 rtl:space-x-reverse flex-wrap">

                <button id="toggleBoldButton" data-tooltip-target="tooltip-bold" type="button" className="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"/>
                    </svg>
                    <span className="sr-only">Bold</span>
                </button>

                <div id="tooltip-bold" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity- tooltip dark:bg-gray-700">
                    Toggle bold
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                
                {/* Italic  */}
                <button id="toggleItalicButton" data-tooltip-target="tooltip-italic" type="button" className="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"/>
                    </svg>
                    <span className="sr-only">Italic</span>
                </button>


                {/* <div id="tooltip-italic" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Toggle italic
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div> */}

                {/* Underline  */}
                <button id="toggleUnderlineButton" data-tooltip-target="tooltip-underline" type="button" className="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"/>
                    </svg>
                    <span className="sr-only">Underline</span>
                </button>

                {/* <div id="tooltip-underline" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Toggle underline
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div> */}


                <button id="toggleStrikeButton" data-tooltip-target="tooltip-strike" type="button" className="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.677 6.523M9.6 19l1.029-4M5 5l6.523 6.523M19 19l-7.477-7.477"/>
                    </svg>
                    <span className="sr-only">Strike</span>
                </button>

                <div id="tooltip-strike" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Toggle strike
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>


                <button id="toggleSubscriptButton" data-tooltip-target="tooltip-subscript" type="button" className="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.9999 21h-4v-.5c1.0989-1.0329 3.75-2.5 3.75-3.5v-1.0001c0-.5523-.4477-.9999-1-.9999h-1.75c-.5523 0-1 .4477-1 1M3.99986 6l9.26894 11.5765M13.1219 6 3.85303 17.5765"/>
                    </svg>
                    <span className="sr-only">Subscript</span>
                </button>

                <div id="tooltip-subscript" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Toggle subscript
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>

                <button id="toggleSuperscriptButton" data-tooltip-target="tooltip-superscript" type="button" className="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.0002 11h-4l-.0001-.5C18.099 9.46711 20.7502 8 20.7502 7V5.99989c0-.55228-.4478-.99989-1-.99989h-1.75c-.5523 0-1 .44772-1 1M5.37837 7.98274 14.6473 19.5593m-.5251-11.25583L4.85547 19.8773"/>
                    </svg>
                    <span className="sr-only">Superscript</span>
                </button>

                <div id="tooltip-superscript" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Toggle superscript
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>

                <button id="toggleHighlightButton" data-tooltip-target="tooltip-highlight" type="button" className="p-1.5 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M9 19.2H5.5c-.3 0-.5-.2-.5-.5V16c0-.2.2-.4.5-.4h13c.3 0 .5.2.5.4v2.7c0 .3-.2.5-.5.5H18m-6-1 1.4 1.8h.2l1.4-1.7m-7-5.4L12 4c0-.1 0-.1 0 0l4 8.8m-6-2.7h4m-7 2.7h2.5m5 0H17"/>
                    </svg>
                    <span className="sr-only">Highlight</span>
                </button>

                <div id="tooltip-highlight" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Toggle highlight
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
    </div>
</div>

<div className="px-4 py-2 bg-white border-mattBlack border-solid border-2 text-mattBlack rounded-b-lg dark:bg-gray-800 min-h-full h-[100%]">
    <label htmlFor="wysiwyg-text-example" className="sr-only">Write comment</label>
    <div id="wysiwyg-text-example" className="block w-full h-[100%] min-h-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 font-open-sans "></div>
</div>
</div>

  )
}

export default Notepad