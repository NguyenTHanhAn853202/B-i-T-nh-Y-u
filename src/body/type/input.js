import styles from './input.module.css'
import {useContext} from 'react'
import {NewContext} from '../../background/context'
import {forwardRef,useImperativeHandle} from 'react'
import {useRef,useState} from 'react'
function Input(gender,ref) {
    const inputRef = useRef()
    const [name,setName] = useContext(NewContext)
    const [values,setValues] = useState('')
    useImperativeHandle(ref,()=>{
        return inputRef.current.value.trim()
    })
    function handleChange(e){
        setValues(e.value)
    }
    return ( 
        <input 
            className ={styles.ip}
            placeholder={`Nhập tên của bạn ${gender.value} ...`}
            ref={inputRef}
            value ={values}
            onChange={(e)=>{handleChange(e.target)}}
        />
     );
}

export default forwardRef(Input);