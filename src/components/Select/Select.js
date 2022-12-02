import React from 'react'

 function Select(prop) {
    const { props, children, ...rest } = prop;
    const data = {
      label:{
          text:"Select an option",
          class:"",
      },
      select:{
          class:"",      
          options:["not given"]   ,
          selected:"Choose an option",
      }
    }


    
    
  return (
    <div>
        <label for="countries" className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${data.label.class}`}>{data.label.text}</label>
        <select id="countries" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${data.select.class}`}>
        <option selected>{data.select.selected}</option>
        {data.select.options.map((option,index)=>
        <option key={index} value={option}>{option}</option>
        )}
        </select>
    </div>
  )
}

export default Select;