import {createContext,useState} from 'react'

export const NewContext = createContext()

function Context({children}) {
    const [names,setNames] =useState([])
    const [check,setCheck] = useState(true)
    return ( 
        <NewContext.Provider value={[names,setNames]}>
            {children}
        </NewContext.Provider>
     );
}

export default Context;