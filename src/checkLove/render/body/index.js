import styles from './bodychecklove.module.css'
import {NewContext} from '../../../background/context'
import {useContext} from 'react'
import {clsx} from 'clsx'
import img from '../imgCheckLove/bigheart.png'
import randomPercent from '../../handle/percent'
function RenderBody(nameSpecial) {
    const [names,setNames] = useContext(NewContext)
    ;const rand = (()=>{
        const check =names[0].toUpperCase() ==='NGUYỄN THANH AN' && names[1].toUpperCase()==='NGÔ THỊ THU'
        if (check) {
            return 100
        }else {return randomPercent()}
    })()
    return (
        <div className='d-f' style={{justifyContent:'center',margin:'30px 0 50px 0'}}>
            <div className={clsx('d-f') } style={{margin:'auto',justifyContent:'center'}}>
                <h3 className={clsx(styles.name)}  >{names[0]}</h3>
                <div className={clsx('d-f',styles.heart)}>
                    <div className={clsx(styles.heartBg)} style={{height:`${rand*141/100}px`}}>
                        <h2 style={{textAlign: 'center',margin:'0',height:'141px',lineHeight:'140px', position: 'relative',top:`${-141+rand*141/100}px`}}>{`${rand}%`}</h2>
                        <img src={img} className={styles.img} style={{top:`${-141+rand*141/100-141}px`}}/>
                    </div>
                    
                </div>
                <h3 className={clsx(styles.name)} style={{textAlign:'left'}}>{names[1]}</h3>
            </div>
        </div>
    );
}

export default RenderBody;