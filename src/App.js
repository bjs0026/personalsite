import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider, Button } from '@chakra-ui/react'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Woohoo we vibin!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <Button
              colorScheme={'teal'}
          >
              Chakra Test Button
          </Button>
      </header>
      </ChakraProvider>
    </div>
  );
}

export default App;
