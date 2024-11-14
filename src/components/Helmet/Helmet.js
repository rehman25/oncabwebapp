import React from "react";

const Helmet = (props) => {
  document.title = "Connecting You to Your Destination-OnCab Global " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
