import React from "react";

function SimpleForm(prop) {
  const props = {
    title: {
      text: "SignUP",
      class: "",
    },
    logo: {
      url: "https://banner2.cleanpng.com/20180715/zio/kisspng-logo-font-flame-logo-5b4b2d7c3b73e0.2237387315316535002435.jpg",
      class: "",
    },
    header: {
      text: "Login To get Access",
      class: "",
    },
    inputs: [
      {
        type: "email",
        title: "Email",
        placeholder: "example@gmail.com",
        class: "",
        error: "Please Enter your Email",
      },
      {
        type: "password",
        title: "Password",
        placeholder: "Password",
        class: "",
        error: "Please Enter your Password",
      },
      
    ],

    buttons: [
      {
        text: "Login",
        svg: `
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="True">
          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>`,

        class: "",
        onPress: () => {
          console.log("Login Button Clicked");
        },
      },
      {
        text: "Login with Google",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/> </svg>`,
        class: "",
        onPress: () => {
          console.log("Google Button Clicked");
        },
      },
      {
        text: "Login with Github",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16"> <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/> </svg>`,
        class: "",
        
        onPress: () => {
          console.log("Google Button Clicked");
        },
      },
    ],
  };


  return (
    <div class=" min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="rounded bg-white max-w-md w-full space-y-8 p-5 shadow-xl">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src={props.logo.url}
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {props.title.text}
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {props.header.text}
            </a>
          </p>
        </div>

        <div class="rounded bg-white max-w-md rounded overflow-hidden  p-5">
          <div class="space-y-4">
            <div class="rounded-md shadow-sm -space-y-px">
              <div class="grid gap-6">
                {props.inputs.map((item) => (
                  <div class="col-span-12">
                    <label
                      for="first_name"
                      class="block text-sm font-medium text-gray-700"
                    >
                      {item.title}
                    </label>
                    <input
                      placeholder={item.placeholder}
                      type={item.type}
                      name="first_name"
                      id="first_name"
                      autocomplete="given-name"
                      className={` ${item.class} w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    />
                    <p className="text-sm text-red-700">{item.error}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              {props.buttons.map((item) => {
                return (
                  <div>
                     {(item!=undefined && item.onPress!=undefined )?
                    <button
                         onClick={item.onPress}
                      class={`${item.class} group  w-full flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-1`}
                    >
                      <span class="mr-auto">
                        <div
                          
                          dangerouslySetInnerHTML={{ __html: item.svg }}
                        ></div>
                      </span>
                      <span class="mr-auto">
                      {item.text}
                      </span>
                    </button>
                   :<></>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleForm;
