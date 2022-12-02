import React from 'react'

function FileInput(prop) {
    const {props,children,...rest} = prop;
    const data = {
        label:{
            text:"Upload File",
            class:"",
        },
        input:{
            class:"",         
        }
      }

  return (
    <div>
        <label className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input ${data.label.class}`}>{data.label.text}</label>
<input className={`block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 ${data.input.class}`} id="file_input" type="file"></input>
    </div>
  )
}

export default FileInput