import React from 'react'

function BlogDetailCard(prop) {
    const {props,children, ...rest} = prop;

    const data={
        title:{
         text:"not mention",
         class:""
        },
        user:{
            img:{
                url:"",
                class:""
            },
            name:{
                text:"",
                class:""
            },
            subtitle:{
                text:"",
                class:""
            }
        },
        body:{
         text:"Not Mention",
         class:""
        },
        header:{
         text:"Not Mention",
         class:""
        },
        button:{
         text:"not given",
         class:""
        },
        views:{
         text:"0.0",
         class:""
        }
   }
    if(props==undefined){
        props=data;
    }

    if(props.title==undefined || props.views==undefined){
        props.title = props.title==undefined?data.title:props.title;
        props.views = data.views;
    }

   

  return (
        <div class="p-12 md:w-1/2 flex flex-col items-start shadow-sm mt-5" {...rest}>
        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{props.title.text}</span>
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{props.header.text}</h2>
        <p class="leading-relaxed mb-8">{props.body.text}</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a class="text-indigo-500 inline-flex items-center">{props.button.text}
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>{props.views.text}
          </span>
        </div>
        <a class="inline-flex items-center">
          <img alt="image" src={props.user.img.url} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900">{props.user.name.text}</span>
            <span class="text-gray-400 text-xs tracking-widest mt-0.5">{props.user.subtitle.text}</span>
          </span>
        </a>
      </div>
    
  )
}

export default BlogDetailCard