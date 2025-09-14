import styles from "./convertScreen.module.css"
import Convert from "./convert.jsx"
import coin from "../../assets/coin.png"
import { GoArrowSwitch } from "react-icons/go";
import { useState } from "react";

export default function ConvertScreen() {
    const options = [
        { value: "USD", label: "USD - Dólar" },
        { value: "EUR", label: "EUR - Euro" },
        { value: "BRL", label: "BRL - Real" },
    ];
    const apiKey = import.meta.env.REACT_APP_API_KEY;
    const [fromCurrency, setFromCurrency] = useState(options[0]);   
    const [toCurrency, setToCurrency] = useState(options[1]);
    const [amount, setAmount] = useState(1);
    const [result, setResult] = useState(null);

    const convertCurrency = async () => {
        try {
            const res = await fetch(
                `https://api.exchangerate.host/convert?from=${fromCurrency.value}&to=${toCurrency.value}&amount=${amount}&access_key=1515d0ba0f7583d8d2c9de69928b03e7`
            );
            const data = await res.json();
            setResult(data.result);
            console.log(data)
        } catch (error) {
            console.log("Erro ao converter moeda: ", error);
        }
    };

    return (
        <div className={styles.container}>
            <div style={{ padding: "30px" }}>
                <h1>
                    ConverC
                    <img src={coin} alt="coin-icon" className={styles.coinIcon}/>
                    in
                </h1>

                <div className={styles.converAll}>
                    <p>Converter de: </p>
                    <Convert
                    options={options}
                    value={fromCurrency}
                    onChange={setFromCurrency}
                    />
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className={styles.value}
                        placeholder="Valor:"
                    />

                    <p>Para: </p>
                    <Convert
                    options={options}
                    value={toCurrency}
                    onChange={setToCurrency}
                    />

                    <button onClick={convertCurrency}>
                        <GoArrowSwitch /> Converter
                    </button>

                    {result && (
                        <p>
                            {amount} {fromCurrency.value} = {" "}
                            <strong>{result.toFixed(2)} {toCurrency.value}</strong>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
