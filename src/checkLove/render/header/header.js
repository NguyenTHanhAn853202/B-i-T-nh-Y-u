import styles from './header.module.css'
import smallHearth from '../imgCheckLove/smallheart.png'

function Header() {
    return ( 
        <div>
            <h1 className={styles.title}>BÓI TÌNH YÊU</h1>
            <img className={styles.heart} src={smallHearth} />
            <p className={styles.describer}>Dưới đây là kết quả của công thức mà <span style={{color:'#f06eaa'}}>Thanh An</span> đã phát minh ra!</p>
        </div>
     );
}

export default Header;