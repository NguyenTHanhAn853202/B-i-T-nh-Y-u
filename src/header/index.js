import {titleLetf,titleRight} from './titles'
import love from './img/love.png'
import {clsx} from 'clsx'
import styles from './styles.module.css'
function Header() {
    return ( 
        <div className={clsx('d-f',styles.header)}>
            {titleLetf.map(
                (title,index) =><li key ={index} className={clsx(styles.headerTitle)} style={{display: 'inline-block'}}>
                    {title}
            </li>)}
            <img src={love} />
            {titleRight.map(
                (title,index) =><li key ={index} className={clsx(styles.headerTitle)} style={{display: 'inline-block'}}>
                    {title}
            </li>)}
        </div>
     );
}

export default Header;