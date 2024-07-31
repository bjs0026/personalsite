import * as React from 'react'

// 1. import `ChakraProvider` component
import {ChakraProvider} from '@chakra-ui/react'
import logo from './logo.svg';
import './App.css';
import Masthead from "./components/app/masthead";
import CurrentScreen from "./routing/current-screen";
import Router from "./routing/router";

function App() {
    return (
        <Router basename={'/personalsite'}>
            <div className="App">
                <ChakraProvider>
                    <Masthead/>
                    <CurrentScreen/>
                </ChakraProvider>
            </div>
        </Router>
    )
}

export default App;
