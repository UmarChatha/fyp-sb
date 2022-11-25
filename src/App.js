import LocationContactForm from './components/Contact/LocationContactForm/LocationContactForm';
import SimpleContactForm from './components/Contact/SimpleContactForm/SimpleContactForm';
import SimpleForm from './components/Form/SimpleForm';
import SideBarNavigation from './components/clientApp/Navigation/SideBarNavigation/SideBarNavigation'
import MainPanel from './components/clientApp/mainPanel/MainPanel';
import RightPanel from './components/clientApp/rightPanel/RightPanel'
import TopNavigation from './components/clientApp/Navigation/TopNavigation/TopNavigation';
function App() {

  const props ={
    img:{
        url:"https://media.wired.com/photos/618c00da12143eb34d938e26/3:2/w_2400,h_1600,c_limit/Gear-Beats-Fit-Pro-top.jpg",
        class:"",
    },
    catagory:{
        text:"Electronic",
        class:"",
    },
    title:{
        text:"Bloody Ear Pods",
        class:""
    },
    price:{
        text:"34$",
        class:"",
    },
    description:{
        text:"30G 8D audio blutooth chargeable Finishing",
        class:""
    }
    }

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
    <>

     <SideBarNavigation>
     <TopNavigation></TopNavigation>

      <MainPanel>
      </MainPanel>
     
     </SideBarNavigation>
     </>
  );
}

export default App;
