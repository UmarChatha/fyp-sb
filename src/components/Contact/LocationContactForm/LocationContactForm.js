import React from "react";

function LocationContactForm(prop) {
  const {props,children,handleClick,...rest} = prop;

  const [name,setName] = React.useState("");
  const [message,setMessage] = React.useState("");
  const [email,setEmail] = React.useState("");

  const [nameError,setNameError] = React.useState(false);
  const [messageError,setMessageError] = React.useState(false);
  const [emailError,setEmailError] = React.useState(false);
  
  const handleSubmit = ()=>{
    if(name===""){
        setNameError(true)
    }else{
        setNameError(false)
    }
    if(email===""){
        setEmailError(true)
    }else{
        setEmailError(false)
    }
    if(message===""){
        setMessageError(true)
    }else{
        setMessageError(false)
    }
    if(name!="" && message!="" && email!=""){
        const object={
            name:{name},
            email:{email},
            message:{message}
          }
          handleClick(object);
    }

  }

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src={props.map.url}
            style={{filter: "grayscale(0.5) contrast(1.3) opacity(0.7)"}}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                {props.address.text}
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">{props.email.text}</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">{props.phone.text}</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            {props.feedback.text}
          </p>
          <div className="relative mb-4">
            <label  className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
             onChange={e =>{ setName(e.target.value) ; setNameError(false)}}
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {nameError? <p className="text-red-700 text-sm">Please Enter Your Email</p>:<></>}
          </div>
          <div className="relative mb-4">
            <label  className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
             onChange={e => {setEmail(e.target.value); setEmailError(false)}}
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {emailError? <p className="text-red-700 text-sm">Please Enter Your Email</p>:<></>}
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
             onChange={e => {setMessage(e.target.value);setMessageError(false);}}
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
            {messageError? <p className="text-red-700 text-sm">Please Enter Message atleast for one word</p>:<></>}
          </div>
          <button onClick={handleSubmit} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {props.button.text}
          </button>
          <p className="text-xs text-gray-500 mt-3" >
              {props.footer.text}
          </p>
        </div>
      </div>
    </section>
  );
}

export default LocationContactForm;
