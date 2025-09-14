import { useState } from "react";
import styles from "./convert.module.css";

export default function Convert({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.customSelect}>
      <div
        className={styles.selected}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value.label}</span>
        <span className={styles.option}>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.arrow}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
