import React, { useEffect } from 'react'
import Head from 'next/head'
// import '../public/editor/editor/app'

const editor = () => {
    useEffect(()=>{
        const elements = document.querySelectorAll('.btn ');


elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element'];


        if(command == 'createLink' || command == 'insertImage') {
            let url = prompt('Enter the link here: ', 'http://')
            document.execCommand(command, false, url);
        }
        else {
            document.execCommand(command, false, null);
        }

        
    });
});
    },1)
    
    
  return (
    <div className='h-[100vh]'>
       

<Head>
   
    <title>Rich Text Editor</title>

</Head>

    <div>
    <div class="main-content ">
        
        <div class="text-editor-header">
            <button type="button" class="btn" data-element="bold">
                <i class="fa fa-bold"></i>
            </button>
            <button type="button" class="btn" data-element="italic">
                <i class="fa fa-italic"></i>
            </button>
            <button type="button" class="btn" data-element="underline">
                <i class="fa fa-underline"></i>
            </button>
            <button type="button" class="btn" data-element="insertUnorderedList">
                <i class="fa fa-list-ul "></i>
            </button>
            <button type="button" class="btn" data-element="insertOrderedList">
                <i class="fa fa-list-ol"></i>
            </button>
            <button type="button" class="btn" data-element="createLink">
                <i class="fa fa-link"></i>
            </button>
            <button type="button" class="btn" data-element="justifyleft">
                <i class="fa fa-align-left"></i>
            </button>
            <button type="button" class="btn" data-element="justifycenter">
                <i class="fa fa-align-center"></i>
            </button>
            <button type="button" class="btn" data-element="justify-right">
                <i class="fa fa-align-right"></i>
            </button>
            <button type="button" class="btn" data-element="justifyFull">
                <i class="fa fa-align-"></i>
            </button>
            <button type="button" class="btn" data-element="insertImage">
                <i class="fa fa-image"></i>
            </button>
        </div>



        <div class="content" contenteditable="true"></div>
    </div>



    </div>



    <script src="app.js"></script>

    <script src ="https://use.fontawesome.com/a31a3f8384.js"></script>

    </div>
  )
}

export default editor
