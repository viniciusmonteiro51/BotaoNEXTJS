

import styles from './styles.module.css';
import { useState } from 'react';

export default function Botao() {
    const [valor, setValor] = useState();
    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    function enviar(e) {
        e.preventDefault();
        setMostrarMensagem(true);
        console.log("O conteúdo foi útil: " + valor);
    }

    function voltarParaBotoes() {
        setMostrarMensagem(false);

    }

    return (
        <header>
            <form onSubmit={enviar} className={styles.fundo}>
                {mostrarMensagem ? (
                    <div className={styles.header}>
                        <div className={styles.fund}>
                            <div className={styles.text}>
                                <h1>Obrigado!</h1>
                            </div>
                            <div className={styles.textP}>
                                <p>Sua opinião é muito importante para melhorarmos a qualidade dos nossos conteúdos!</p>
                            </div>

                        </div>
                        <button className={styles.buttonVoltar} onClick={voltarParaBotoes}>
                            Voltar
                        </button>
                    </div>
                ) : (
                    <div className={styles.bar}>
                        <h1 className={styles.namebar}>Esse conteúdo foi útil?</h1>
                        <div>
                            <button
                                className={styles.buttonbar1}
                                onClick={() => setValor('Sim')}
                                
                            >
                                😄Sim
                            </button>
                            <button
                                className={styles.buttonbar2}
                                onClick={() => setValor('Não')}
                            >
                                😢Não
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </header>
    );
}
