import React from 'react'

function Card(prop) {    
    const {props,children, ...rest} = prop

    const dataObj={
        title:{
         text:"",
         class:""
        },
        img:{
         url:"",
         class:""
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
    <div className="p-4 md:w-1/3" {...rest} >
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">
      <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={data.img.url} alt="blog" />
      <div className="p-6">
        <h2 className={`${data.title.class} tracking-widest text-xs title-font font-medium text-gray-400 mb-1`}>{data.title.text}</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{data.header.text}</h1>
        <p className="leading-relaxed mb-3">{data.body.text}</p>
        <div className="flex items-center flex-wrap ">
          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">{data.button.text}
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
      
          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>{data.views.text}
          </span>
        </div>
      </div>
    </div>
    {children}
  </div>
  )
}

export default Card