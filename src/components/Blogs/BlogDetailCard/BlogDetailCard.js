import React from 'react'

function BlogDetailCard(prop) {
    const {props,children, ...rest} = prop;

    const dataObj={
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
         text:"",
         class:""
        },
        header:{
         text:"",
         class:""
        },
        button:{
         text:"",
         class:""
        },
        views:{
         text:"",
         class:""
        }
   }
    
   const [data,setData] = React.useState(dataObj)

   const merge = (dst,src) => {
     Object.keys(src).forEach((key) => {
       if (!dst[key]) {
         dst[key] = src[key];
       } else if (typeof src[key] === 'object' && src[key] !== null && typeof dst[key] === 'object' && dst[key] !== null) {
         merge(dst[key], src[key]);
       }
     })
   }
   React.useEffect( ()=>{
     let p2 = JSON.parse(JSON.stringify(dataObj));
     merge(p2,props)
     setData(p2)
   },[])
   

  return (
        <div class="p-12 md:w-1/2 flex flex-col items-start shadow-sm mt-5" {...rest}>
        <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{data.title.text}</span>
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{data.header.text}</h2>
        <p class="leading-relaxed mb-8">{data.body.text}</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a class="text-indigo-500 inline-flex items-center">{data.button.text}
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>{data.views.text}
          </span>
        </div>
        <a class="inline-flex items-center">
          <img alt="image" src={data.user.img.url} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900">{data.user.name.text}</span>
            <span class="text-gray-400 text-xs tracking-widest mt-0.5">{data.user.subtitle.text}</span>
          </span>
        </a>
        {children}
      </div>
    
  )
}

export default BlogDetailCard