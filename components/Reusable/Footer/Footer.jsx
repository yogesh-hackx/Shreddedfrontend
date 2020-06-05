import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footMain}>
            <div className={styles.fCol1}>
               <p>About Us</p>
               <br/>
               <p>Contact</p>
               <br/>
               <p>Terms & Conditions</p>
            </div>
            <div className={styles.fCol2}>
              <p>Blog</p>
              <br/>
              <p>Payments</p>
              <br/>
              <p>Photo Gallery</p>
            </div> 
        </div>
    )
}

export default Footer