import React from "react";

function Checkbox(prop) {
  const { props, children, ...rest } = prop;

  const data = {
    label: {
      text: "Default checkbox",
      class: "",
    },
    input: {
      class: "",
    },
  };

  return (
    <div>
      <div className="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className={`w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${data.input.class}`}
          {...rest}
        />
        <label
          for="default-checkbox"
          className={`ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${data.label.class}`}
        >
          {data.label.text}
        </label>
      </div>
    </div>
  );
}

export default Checkbox;
