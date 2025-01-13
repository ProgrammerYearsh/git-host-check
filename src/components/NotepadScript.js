
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

window.addEventListener('load', function() {
    if (document.getElementById("wysiwyg-text-example")) {

    const FontSizeTextStyle = TextStyle.extend({
        addAttributes() {
            return {
            fontSize: {
                default: null,
                parseHTML: element => element.style.fontSize,
                renderHTML: attributes => {
                if (!attributes.fontSize) {
                    return {};
                }
                return { style: 'font-size: ' + attributes.fontSize };
                },
            },
            };
        },
    });
    const CustomBold = Bold.extend({
    // Override the renderHTML method
    renderHTML({ HTMLAttributes }) {
    return ['span', { ...HTMLAttributes, style: 'font-weight: bold;' }, 0];
    },
    // Ensure it doesn't exclude other marks
    excludes: '',
    });

    // tip tap editor setup
    const editor = new Editor({
        element: document.querySelector('#wysiwyg-text-example'),
          extensions: [
            StarterKit.configure({
                textStyle: false,
                bold: false,
                marks: {
                    bold: false,
                },
            }),
            // Include the custom Bold extension
            CustomBold,
            Highlight,
            Underline,
            Subscript,
            Superscript,
            TextStyle,
            FontSizeTextStyle,
            Color,
            FontFamily
        ],
        content: '  <strong> Note Making Application </strong>  <p>Simplify your  mathematical challenges with our powerful scientific calculator. Whether youre solving equations, performing statistical analyses, or exploring complex mathematical concepts, our calculator provides the tools and functionality you need to succeed</p><p>Go beyond basic calculations with our comprehensive scientific calculator. Its designed to handle a wide range of mathematical functions, making it an essential tool for students and professionals alike.</p><p>EOur scientific calculator is equipped to handle a wide range of mathematical functions, from basic arithmetic and trigonometry to advanced calculus and statistics. Its the perfect tool for students, professionals, and anyone who needs to perform complex calculations with ease and accuracy.</p><p>Our Mortgage Calculator goes beyond monthly payments. It calculates the total repayment amount and the total interest paid, providing you with a complete financial picture of your mortgage.</p><p>Gain a complete understanding of your mortgage with our comprehensive calculator. Easily determine your monthly payments, the total amount youll repay, and the total interest accrued, giving you a clear picture of your financial obligations and helping you plan accordingly</p>',
        editorProps: {
            attributes: {
                class: 'format lg:format-lg dark:format-invert focus:outline-none format-blue max-w-none min-h-[380px] h-[100%]',
            },
        }
    });

    // set up custom event listeners for the buttons
    document.getElementById('toggleBoldButton').addEventListener('click', () => editor.chain().focus().toggleBold().run());
    document.getElementById('toggleItalicButton').addEventListener('click', () => editor.chain().focus().toggleItalic().run());
    document.getElementById('toggleUnderlineButton').addEventListener('click', () => editor.chain().focus().toggleUnderline().run());
    document.getElementById('toggleStrikeButton').addEventListener('click', () => editor.chain().focus().toggleStrike().run());
    document.getElementById('toggleSubscriptButton').addEventListener('click', () => editor.chain().focus().toggleSubscript().run());
    document.getElementById('toggleSuperscriptButton').addEventListener('click', () => editor.chain().focus().toggleSuperscript().run());
    document.getElementById('toggleHighlightButton').addEventListener('click', () => {
    const isHighlighted = editor.isActive('highlight');
    // when using toggleHighlight(), judge if is is already highlighted.
    editor.chain().focus().toggleHighlight({
        color: isHighlighted ? undefined : '#ffc078' // if is already highlighted，unset the highlight color
    }).run();
    });

    document.getElementById('toggleCodeButton').addEventListener('click', () => {
        editor.chain().focus().toggleCode().run();
    });

    const textSizeDropdown = FlowbiteInstances.getInstance('Dropdown', 'textSizeDropdown');

    // Loop through all elements with the data-text-size attribute
    document.querySelectorAll('[data-text-size]').forEach((button) => {
        button.addEventListener('click', () => {
            const fontSize = button.getAttribute('data-text-size');

            // Apply the selected font size via pixels using the TipTap editor chain
            editor.chain().focus().setMark('textStyle', { fontSize }).run();

            // Hide the dropdown after selection
            textSizeDropdown.hide();
        });
    });

    // Listen for color picker changes
    const colorPicker = document.getElementById('color');
    colorPicker.addEventListener('input', (event) => {
        const selectedColor = event.target.value;

        // Apply the selected color to the selected text
        editor.chain().focus().setColor(selectedColor).run();
    })

    document.querySelectorAll('[data-hex-color]').forEach((button) => {
        button.addEventListener('click', () => {
            const selectedColor = button.getAttribute('data-hex-color');

            // Apply the selected color to the selected text
            editor.chain().focus().setColor(selectedColor).run();
        });
    });

    document.getElementById('reset-color').addEventListener('click', () => {
        editor.commands.unsetColor();
    })

    const fontFamilyDropdown = FlowbiteInstances.getInstance('Dropdown', 'fontFamilyDropdown');

    // Loop through all elements with the data-font-family attribute
    document.querySelectorAll('[data-font-family]').forEach((button) => {
        button.addEventListener('click', () => {
            const fontFamily = button.getAttribute('data-font-family');

            // Apply the selected font size via pixels using the TipTap editor chain
            editor.chain().focus().setFontFamily(fontFamily).run();

            // Hide the dropdown after selection
            fontFamilyDropdown.hide();
        });
    });

    }
})
