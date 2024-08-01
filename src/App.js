import * as React from 'react'

// 1. import `ChakraProvider` component
import {ChakraProvider} from '@chakra-ui/react'
import {HashRouter} from "react-router-dom"
import './App.css';
import Masthead from "./components/app/masthead";
import CurrentScreen from "./routing/current-screen";


function App() {
    return (
        <React.StrictMode>
            <HashRouter>
                <div className="App">
                    <ChakraProvider>
                        <Masthead/>
                        <CurrentScreen/>
                    </ChakraProvider>
                </div>
            </HashRouter>
        </React.StrictMode>
    )
}

export default App;
