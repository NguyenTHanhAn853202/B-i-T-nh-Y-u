import Input from "./input";
import Button from './button'
import {useEffect, useRef,useContext} from 'react'
import {NewContext} from '../../background/context'
import {Contexts} from '../../context'
function Type() {
    const gender = ['Nam','Nữ']
    const refIp1 = useRef()
    const refIp2 = useRef()
    const [names,setNames] = useContext(NewContext)
    const [check,setCheck] = useContext(Contexts)
    function hanlderClick() {
        setNames(props =>{
            const newNames = [refIp1.current,refIp2.current]
            return newNames
        })
        setCheck(!check)
    }
    return ( 
        <div>
            <p style={{color: 'white',textAlign: 'center'}}>Mời bạn điền họ và tên (đầy đủ dấu) vào 2 ô dưới:</p>
            <div className='d-f' style={{justifyContent:'center'}}>
                <Input value={[gender[0]]} ref={refIp1}/>
                <Input value={[gender[1]]} ref={refIp2}/>
            </div>
            <div className='d-f' style={{justifyContent:'center',marginTop:'30px'}}>
                {true && <Button onHandle={hanlderClick}/>}
            </div>
        </div>
     );
}

export default Type;