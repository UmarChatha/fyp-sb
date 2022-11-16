import React from "react";

function SimpleContactForm(prop) {

    const dataObj= {
      body:{
          text:"Feel Free to Contact Us~~",
          class:""
        },
        address:{
          text:"Comsats Univercity Lahore",
          class:""
        },
        streetAddress:{
          text:"34 street a for",
          class:""
        },
        email:{
          text:"abdulman@gmail.com",
          class:""
        },
        phone:{
          text:"233-233-2-233"
        },
        feedback:{
          text:"Great University"
        },
        button:{
          text:"Submit",
          class:""
        },
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
  const { props, children, handleClick, ...rest } = prop;

  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [nameError, setNameError] = React.useState(false);
  const [messageError, setMessageError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);

  const handleSubmit = () => {
    if (name === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (message === "") {
      setMessageError(true);
    } else {
      setMessageError(false);
    }
    if (name != "" && message != "" && email != "") {
      const object = {
        name: { name },
        email: { email },
        message: { message },
      };
      handleClick(object);
    }
  };

  return (
    <section className="text-gray-600 body-font relative" { ...rest }>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {data.body.text}
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError(false);
                  }}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {nameError ? (
                  <p className="text-red-700 text-sm">
                    Please Enter Your Email
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label  className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(false);
                  }}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {emailError ? (
                  <p className="text-red-700 text-sm">
                    Please Enter Your Email
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setMessageError(false);
                  }}
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
                {messageError ? (
                  <p className="text-red-700 text-sm">
                    Please Enter Message atleast for one word
                  </p>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="p-2 w-full">
              <button  onClick={handleSubmit} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {data.button.text}
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-indigo-500">{data.button.email}</a>
              <p className="leading-normal my-5">
                {data.address.text}
                <br />
                {data.streetAddress.text}
              </p>
            </div>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}

export default SimpleContactForm;
