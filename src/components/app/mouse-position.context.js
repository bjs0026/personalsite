import React, {createContext, useState, useEffect, useRef} from 'react';

export const MouseContext = createContext();

export const MouseProvider = ({children, element = document}) => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const elementRef = useRef(element);

    const handleMouseMove = (event) => {
        const rect = elementRef.current.getBoundingClientRect();
        setMousePosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    useEffect(() => {
        const currentElement = elementRef.current;
        currentElement.addEventListener('mousemove', handleMouseMove);
        return () => {
            currentElement.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const setElementRef = (ref) => {
        elementRef.current = ref;
    };
    return (
        <MouseContext.Provider value={{mousePosition, setElement: setElementRef}}>
            <div ref={elementRef}>{children}</div>
        </MouseContext.Provider>
    );
};

