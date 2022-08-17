import styles from './backgroundCheckLove.module.css'
import Header from '../header/header';
import FooterRender from '../footer/footer'
import RenderBody from '../body/index'
import {Contexts} from '../../../context'
import {useContext} from 'react'
function BackgroundCheckLove() {
    const [check,setCheck] =useContext(Contexts)
    return (
        <div className={styles.background}>
            <h2 className={styles.close} onClick={(e)=>setCheck(!check)}>X</h2>
            <Header />
            <RenderBody />
            <FooterRender/>
        </div>
    );
}

export default BackgroundCheckLove;