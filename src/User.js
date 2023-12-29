import React from "react";

const User = (props) => {
  let { name, Age } = props.data;
  return <div>
    <h1>{name}</h1>
    <h2>{Age}</h2>
  </div>;
};

export default User;
