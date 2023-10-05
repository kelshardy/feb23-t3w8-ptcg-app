import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext(null);

export default function ApiProvider({children}){
    
    const [apiUrl, setApiUrl] = useState("https://api.pokemontcg.io/");

    // useEffect(() => {
    //     setApiUrl("https://api.pokemontcg.io/");
    // }, []);

    return(
        <ApiContext.Provider value={
            {
                apiUrl: apiUrl, 
                setApiUrl: setApiUrl
            }
        }>
            {children}
        </ApiContext.Provider>
    )
}