import styles from './About.module.scss';
import avatar from '../../assets/avatar-image.png';
import { ReactComponent as OuterCircle } from '../../assets/outer-circle-image.svg';

const About: React.FC = () => {
    return (
        <section className={styles.about}>
            <div>
                <OuterCircle className={styles.circle}/>
                <img src={avatar} alt="" className={styles.avatar} />
            </div>
            <div className={styles.text}>About text</div>
        </section>
    );
};

export default About;
