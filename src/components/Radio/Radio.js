import React from 'react'

function Radio(prop) {
    const {props,children,...rest} = prop;
    
    const data = {
      label:{
          text:"Default Radio-Button",
          class:"",
      },
      input:{
          name:"Default-radio",
          class:"",         
      }
    }

  return (
    <div>
        <div className="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="" name={data.input.name} className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${data.input.class}`}/>
    <label for="default-radio-1" className={`ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${data.label.class}`}>{data.label.text}</label>
    </div>

    </div>
  )
}

export default Radio