import React from "react";

function BlogCardViewer(prop) {
  const { props, children, ...rest } = prop;
    console.log(props)
  return (
    <section className="text-gray-600 body-font" {...rest}>
      <div className="  container px-5 py-24 mx-auto">
      <div class="flex flex-row flex-wrap -m-4">
        {children}
      </div>
      </div>
    </section>
  );
}

export default BlogCardViewer;
