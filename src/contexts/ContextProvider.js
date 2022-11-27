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

    const handleClick = (clicked)=>{
        setIsClicked({ ...isClicked , [clicked]:true })
        console.log(isClicked)
    }


    return <Context.Provider value={{
        activeMenue,
        setActiveMenue,
        isClicked, 
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize
    }}>

    {children}

    </Context.Provider>
}