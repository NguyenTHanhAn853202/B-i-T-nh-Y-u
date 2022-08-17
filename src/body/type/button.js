import styles from './button.module.css'
// import {useRef,useImperativeHandle,forwardRef} from 'react'
function Button(props ) {
    const {onHandle} = props
    return ( 
        <button className={styles.btn} onClick ={onHandle}>
            KIỂM TRA
        </button>
     );
}

export default Button;