import { createContext ,useState} from "react";

export const Contexts = createContext()

function Context({children}) {
    const [check,setCheck] = useState(false)
    return (
        <Contexts.Provider value={[check,setCheck]}>
            {children}
        </Contexts.Provider>
    );
}

export default Context