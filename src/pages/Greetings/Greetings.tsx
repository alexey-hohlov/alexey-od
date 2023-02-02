import { ArrowButton } from '../../components';
import styles from './Greetings.module.scss';

const Greetings: React.FC = () => {
    const particles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <section className={styles.greetings}>
            <div className={styles.block}>
                <div className={styles.text}>
                    Привет, меня зовут
                    <span> Алексей Хохлов</span>
                    .
                    <br />
                    Я
                    <span> front-end </span>
                    разработчик.
                </div>
                <ArrowButton title={'Learn more'}/>
            </div>
            <ul className={styles.particles}>
                {particles.map(particle => (
                    <li key={particle}></li>
                ))}
            </ul>
        </section>
    );
};

export default Greetings;
