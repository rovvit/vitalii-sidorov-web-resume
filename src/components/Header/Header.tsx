import React from 'react';
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';
import LinkedInButton from "../Buttons/LinkedInButton";
import TelegramButton from "../Buttons/TelegramButton";
import MailButton from "../Buttons/MailButton";
import HomeButton from "../Buttons/HomeButton";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.name}>Vitalii Sidorov</div>
            </div>
            <div className={styles.filler}/>
            <nav className={styles.nav}>
                <Link to="/timeline">Timeline</Link>
            </nav>
            <div className={styles.button}>
                <HomeButton />
                <LinkedInButton />
                <TelegramButton />
                <MailButton />
            </div>
        </header>
    );
};

export default Header;