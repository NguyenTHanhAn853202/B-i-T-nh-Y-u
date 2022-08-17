import styles from './footer.module.css'
import {clsx} from "clsx"
function Footer() {
    return ( 
        <div className={clsx(styles.cl,'d-f')} style={{justifyContent:'center',textAlign: "center",marginTop:'30px'}}>
            <div>
                <h1 className={styles.header}>CHÚC BẠN CÓ MỘT TRẢI NGHIỆM THẬT TỐT</h1>
                <h2>NHÀ PHÁT TRIỂN : <a href='https://www.facebook.com/an.thanh.7921975' className={styles.developer}>NGUYỄN THANH AN</a></h2>
            </div>
        </div>
     );
}

export default Footer;