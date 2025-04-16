import React from "react";

const Home = () => {

 let name = "FSD-WD-T-B21";  
  const handleSubmit = () =>{
    console.log("Button Clicked");
  }


  return (
    <div>
      <h1 id="home">Home Component</h1>
      <button onClick={handleSubmit}>Click Me!</button>
      <br />
      <br />
      <br />
     {name}
    </div>
  );
};

export default Home;
