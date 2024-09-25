import React, {useContext, useRef, useEffect, useState} from 'react'
import {
    useTheme, useToken, useColorModeValue
} from "@chakra-ui/react";
import {MouseContext} from './mouse-position.context'
import {css} from '@emotion/css'

const RadiantBox = ({children, height = '100%', width = '100%', innerPadding = '10%', ...props}) => {
    const theme = useTheme()
    const {_light: lightColor, _dark: darkColor} = theme.semanticTokens.colors['chakra-body-bg']
    const darkToken = useToken('colors', [darkColor])[0]

    const {mousePosition, setElement} = useContext(MouseContext)
    const {x, y} = mousePosition
    const myBox = useRef()
    useEffect(() => {
        setElement(myBox.current);
    }, [setElement]);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    useEffect(() => {
        setElement(myBox.current);
        if (myBox.current) {
            const rect = myBox.current.getBoundingClientRect();
            setMouseX(Math.round((x / rect.width) * 100));
            setMouseY(Math.round((y / rect.height) * 100));
        }
    }, [setElement, x, y]);

    const inner = css`
      background-color: ${useColorModeValue(lightColor, darkToken)};
      height: 98%;
      width: 98%;
      position: relative;
      margin: auto;
      padding: ${innerPadding};
      border-radius: 8px;
    `
    const outer = css`
      position: relative;
      top: 20%;
      margin: auto;
      height: ${height};
      width: ${width};
      background: radial-gradient(100px 100px at calc(${mouseX}% + 1px) calc(${mouseY}% + 1px),
      ${mouseX == 0 && mouseY == 0 ? 'grey 100%' : 'red 25%'},
      grey 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
    `

    return (
        <>
            <div ref={myBox} className={outer}>
                <div className={inner}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default RadiantBox