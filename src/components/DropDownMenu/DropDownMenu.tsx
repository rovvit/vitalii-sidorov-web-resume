import React from 'react';
import styles from './DropDownMenu.module.css';

interface Option {
    value: string;
    label: string;
}

interface DropDownMenuProps {
    options: Option[];
    selectedValue: string;
    onSelect: (value: string) => void;
    label?: string;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ options, selectedValue, onSelect, label }) => {
    return (
        <div className={styles.wrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <select
                className={styles.select}
                value={selectedValue}
                onChange={(e) => onSelect(e.target.value)}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropDownMenu;