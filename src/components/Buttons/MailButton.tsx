import React from 'react';
import styles from './MailButton.module.css';
import {ReactComponent as LinkedInLogo} from '../../assets/mail.svg';

const MailButton: React.FC = () => {
    const handleClick = () => {
        window.open('mailto:vitalii.vorodis@gmail.com', '_blank');
    };
    return (
        <button className={styles.button} onClick={handleClick}>
            <LinkedInLogo className={styles.mercadoMatch}/>
        </button>
    );
};

export default MailButton;