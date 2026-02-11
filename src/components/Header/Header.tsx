import React from 'react';
import styles from "./Header.module.css";
import LinkedInButton from "../Buttons/LinkedInButton";
import TelegramButton from "../Buttons/TelegramButton";
import MailButton from "../Buttons/MailButton";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.name}>Vitalii Sidorov</div>
            </div>
            <div className={styles.filler}/>
            <nav className={styles.nav}>
                <a href="/">Home</a>
            </nav>
            <div className={styles.button}>
                <LinkedInButton />
                <TelegramButton />
                <MailButton />
            </div>
        </header>
    );
};

export default Header;