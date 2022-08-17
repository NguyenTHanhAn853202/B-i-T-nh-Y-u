import styles from './footer.module.css'

function FooterRender() {
    return ( 
        <div className={styles.person}>
            <p className={styles.describer}>
                Bác sĩ tình yêu cho rằng, hai bạn sẽ có một kết quả tốt đẹp đấy.
                Nhưng, nếu bạn không thường xuyên quan tâm và chăm sóc đến người ấy, 
                không làm cho người đó cười, nếu bạn không chăm sóc bản thân và phấn đấu hơn trong học tập và làm việc, 
                thì nguy cơ có một kẻ thứ BA xuất hiện cũng không phải là ít đâu nhé!
            </p>
            <h2 className={styles.final}>
                Chúc bạn sớm tìm được nữa kia
            </h2>
            <h3 className={styles.final}>Cảm ơn bạn đã sử dụng ứng dụng của tôi</h3>
        </div>
     );
}

export default FooterRender;