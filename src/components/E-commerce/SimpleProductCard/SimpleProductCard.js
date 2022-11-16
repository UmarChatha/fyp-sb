import React from "react";

function SimpleProductCard(prop) {
  const { props, children, ...rest } = prop;


    const dataObj={
        img:{
            url:"",
            class:"",
        },
        catagory:{
            text:"",
            class:"",
        },
        title:{
            text:"",
            class:""
        },
        price:{
            text:"",
            class:"",
        },
        description:{
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
    
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg" {...rest}>
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className={`${data.img.class} object-cover object-center w-full h-full block`}
          src={data.img.url}
        />
      </a>
      <div className="mt-4">
        <h3 className={`${data.catagory.class} text-gray-500 text-xs tracking-widest title-font mb-1`}>
          {data.catagory.text}
        </h3>
        <h2 className={`${data.title.class} text-gray-900 title-font text-lg font-medium`}>
        {data.title.text}
        </h2>
        <p className={`${data.description.class} text-gray-700 text-sm mt-2 py-2 border-t-2 border-b-2 border-solid border-gray-300 `}>
            {data.description.text}
        </p>
        <br></br>
        <p className={` ${data.price.class}`}>{data.price.text}</p>
      </div>
      {children}
    </div>
  );
}

export default SimpleProductCard;
