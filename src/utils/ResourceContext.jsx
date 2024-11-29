import { createContext, useState } from "react";

export const ResourceContext = createContext();

const ResourceContextProvider = ({ children }) => {
    const [toggleNav, setToggleNav] = useState(true)
    return (
        <ResourceContext.Provider value={{ toggleNav, setToggleNav }}>
            {children}
        </ResourceContext.Provider>
    )
}
export default ResourceContextProvider;