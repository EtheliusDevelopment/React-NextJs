import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={styles.title}>
                <span>WebDev</span>
                Magica Roma        
            </h1> 
        <p className={styles.description}>Vieni e vinci insieme a noi</p>
        </div>
    )
}

export default Header
