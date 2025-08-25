import styles from "./convertScreen.module.css"
import Convert from "./convert.jsx"
import coin from "../../assets/coin.png"
import { GoArrowSwitch } from "react-icons/go";

export default function ConvertScreen() {
    const options = [
        { value: "usd", label: "USD - Dólar" },
        { value: "eur", label: "EUR - Euro" },
        { value: "brl", label: "BRL - Real" },
    ];
    return (
        <div className={styles.container}>
            <div style={{ padding: "30px" }}>
            <h1>ConverC<img src={coin} alt="coin-icon" className={styles.coinIcon}/>in</h1>
            <div className={styles.converAll}>
                <p>Converter de: </p>
                    <Convert
                        options={options}
                        onChange={(value) => console.log("Selecionado:", value)}
                    />
                <p>Para: </p>
                    <Convert
                        options={options}
                        onChange={(value) => console.log("Selecionado:", value)}
                    />
                    <button><GoArrowSwitch /> Converter </button>
            </div>
            </div>
        </div>
    )
}