import { ReactNode } from 'react';
import styles from './Bullet.module.scss';

interface Props {
    children: ReactNode;
    header: string;
    text: string;
}

const Bullet: React.FC<Props> = ({ children, header, text }) => {
    return (
        <li className={styles.wrapper}>
            <div className={styles.bullet}>{children}</div>
            <p className={styles.header}>{header}</p>
            <p className={styles.text}>{text}</p>
        </li>
    );
};

export default Bullet;
