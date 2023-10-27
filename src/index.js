// import React from 'react';
// import ReactDOM from 'react-dom';

// const App = () => {
//   return <div>Hello React!</div>;
// };

// ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";
import App from './App';  // Import the App component
import './styles/styles.css';

//ReactDOM.render(<App />, document.getElementById('root'));
function Root() {
    return (
      <ChakraProvider>
        <App />
      </ChakraProvider>
    );
  }
  
  ReactDOM.render(<Root />, document.getElementById("root"));
