import React from "react";

function BlogContainedCard(prop) {
  const { props, children, ...rest } = prop;
  const data = {
    title: {
      text: "not mention",
      class: "",
    },
    img: {
      url: "",
      class: "",
    },
    body: {
      text: "Not Mention",
      class: "",
    },
    header: {
      text: "Not Mention",
      class: "",
    },
    button: {
      text: "not given",
      class: "",
    },
    views: {
      text: "0.0",
      class: "",
    },
  };
  if (props == undefined) {
    props = data;
  }

  if (props.title == undefined || props.views == undefined) {
    props.title = props.title == undefined ? data.title : props.title;
    props.views = data.views;
  }

  return (
      <div className="p-4 md:w-100" {...rest}>
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {props.title.text}
          </h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            {props.header.text}
          </h1>
          <p className="leading-relaxed mb-3">{props.body.text}</p>
          <a className="text-pink-500 inline-flex items-center">
            {props.button.text}
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              {props.views.text}
            </span>
          </div>
        </div>
      </div>
  );
}

export default BlogContainedCard;
