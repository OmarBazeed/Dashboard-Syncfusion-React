import { createContext, useState } from "react";

const InitalState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
}

export const Context = createContext();


export const ContextProvider = ({children})=>{

    const [activeMenue , setActiveMenue] = useState(true);
    const [isClicked, setIsClicked] = useState(InitalState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor , setCurrentColor] = useState(localStorage.getItem('current-color') ? localStorage.getItem('current-color') : '#1E4DB7');
    const [showSettings , setShowSettings] = useState(false);
    const [currentMode , setCurrentMode] = useState(localStorage.getItem('theme-mode') ? localStorage.getItem('theme-mode') : 'Light');

    const handleClick = (clicked)=>{
        setIsClicked({ [clicked]:true })
    }


    return <Context.Provider value={{
        activeMenue,
        setActiveMenue,
        isClicked, 
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        showSettings,
        setShowSettings,
        currentMode,
        setCurrentMode
    }}>

    {children}

    </Context.Provider>
}