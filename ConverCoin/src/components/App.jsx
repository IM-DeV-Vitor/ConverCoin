import styles from "./App.module.css"
import BaseButton from "./container-buttons/BaseButton.jsx"
import coin from "../assets/coin.png"
import { SiConvertio } from "react-icons/si";
import { MdHistory } from "react-icons/md";

// 🔧 Funcionalidades
// Conversão de moedas usando uma API gratuita (ex: ExchangeRate API).
// Histórico de conversões → salvar no localStorage e exibir em uma tabela.
// Favoritos → escolher pares de moedas favoritos para acesso rápido.
// UI limpa e responsiva (Tailwind + shadcn/ui).
// Dark/Light mode.

export default function App() {
    return (
        <div className={styles.container}>
            <h1>ConverC<img src={coin} alt="coin-icon" className={styles.coinIcon}/>in</h1>
            <div className={styles.buttons}>
                    <div className={styles.IconsConver}> <SiConvertio /> </div>
                <BaseButton title={ "Converter" } location={ "/convert" }/>
                    <div className={styles.IconsHist}> <MdHistory /> </div>
                <BaseButton title={ "Ver histórico" } location={ "/history" }/>
            </div>
        </div>
    )
}