import { ArrowIcon } from '../../assets';
import styles from './ArrowButton.module.scss';

interface Props {
    title: string;
    onClick?: () => void;
    width?: string;
    height?: string;
}

const Button: React.FC<Props> = ({ title, onClick, width, height }) => {
    return (
        <button
            className={styles.button}
            style={{ width: width, height: height }}
            onClick={onClick}
        >
            {title}
            <ArrowIcon />
        </button>
    );
};

export default Button;
