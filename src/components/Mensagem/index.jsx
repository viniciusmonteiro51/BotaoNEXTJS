import styles from './styles.module.css'

export default function Cabecario() {

    return (
        <>
            <header className={styles.header}>
                <div className={styles.fundo}>
                    <div className={styles.text}>
                        <h1>Obrigado!</h1>

                    </div>
                    <div className={styles.textP}>
                        <p>Sua opinião é muito importante para melhorarmos a qualidade dos nossos conteúdos!</p>
                    </div>
                </div>
            </header>
        </>
    )
}