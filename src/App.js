import LocationContactForm from './components/Contact/LocationContactForm/LocationContactForm';
import SimpleContactForm from './components/Contact/SimpleContactForm/SimpleContactForm';
function App() {

  const data={
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

  const handleClick = (object)=>{
    console.log(object)
  }
  return (
   <SimpleContactForm props={data} handleClick={handleClick}></SimpleContactForm>
  );
}

export default App;
