import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = (<h1 className='jsxHeading'>Namaste React from JSX 🚀💸</h1>)


const Title = () => (
  <h1 className='title'>Hello from differnt component</h1>
)

const HeadingComponent = () => (
  <div id="container"> 
     <Title/>
     <Title></Title>
     {Title()}
     <h1 className='heading'>Namaste React using Functional Component</h1>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);

