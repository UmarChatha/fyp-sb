import React from 'react'

function TextArea(prop) {
    const { props, children, ...rest } = prop;
    const data = {
      label:{
          text:"Your Message",
          class:"",
      },
      textarea:{
          rows:"4",
          placeholder:"Write your thoughts here...",
          class:"",         
      }
    }

  return (
    <div>
        <label for="message" class={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${data.label.class}`}>{data.label.text}</label>
        <textarea id="message" rows={data.textarea.rows} class={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${data.textarea.class}`} placeholder={data.textarea.placeholder}></textarea>
    </div>
  )
}

export default TextArea;