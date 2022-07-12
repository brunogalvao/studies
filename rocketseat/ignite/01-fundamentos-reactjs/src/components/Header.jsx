import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>

            <div className='d-flex flex-column text-center'>
                
                <p>Ignite Feed</p>

                <small>estudo sobre React</small>
                
            </div>

        </header>
    )
}