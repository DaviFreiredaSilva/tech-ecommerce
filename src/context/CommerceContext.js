import { createContext, useState } from "react";

const commerceContext = createContext()

const CommerceContextProvider = ({children})=>{

    const [showFloatMenu, setShowFloatMenu] = useState(false)

    const toggleFloatMenu = ()=>{
        setShowFloatMenu(!showFloatMenu)
    }

    return(
        <commerceContext.Provider value={{showFloatMenu, toggleFloatMenu}}>
            {children}
        </commerceContext.Provider>
    )
}

export {commerceContext, CommerceContextProvider}