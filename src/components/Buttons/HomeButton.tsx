import React from 'react';
import styles from './TelegramButton.module.css';
import {Link} from "react-router-dom";
import {ReactComponent as HomeLogo} from '../../assets/home.svg';

const HomeButton: React.FC = () => {
    return (
        <Link to="/" className={styles.button} aria-label="Go to home">
            <HomeLogo className={styles.homeIcon}/>
        </Link>
    );
};

export default HomeButton;