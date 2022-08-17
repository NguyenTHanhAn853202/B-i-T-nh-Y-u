import Header from '../header/index'
import styles from './background.module.css';
import Body from '../body/index';
import Footer from '../footer/footer'
import CheckLove from '../checkLove/render/render'
import Context from './context';
import {Contexts} from '../context.js'
import {useContext} from 'react'
function Background() {
    const [check,setCheck] = useContext(Contexts)
    return ( 
        <Context>
            <div className={styles.background}>
                <Header/>
                {check && <CheckLove/>}
                <Body />
                <Footer />
            </div>
        </Context>
     );
}

export default Background;