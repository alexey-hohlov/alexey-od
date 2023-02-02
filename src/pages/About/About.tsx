import styles from './About.module.scss';
import photo from '../../assets/avatar-image.png';
import { Bullet, Navbar } from '../../components';
import { CodeIcon, LayoutIcon, LampIcon, RocketIcon } from '../../assets';

const About: React.FC = () => {
    const bullets = [
        {
            svg: <CodeIcon />,
            header: 'Разработка',
            text: 'При разработке я стараюсь придерживаться самых актуальных технологий и best practice.',
        },
        {
            svg: <LayoutIcon />,
            header: 'Адаптивность',
            text: 'Моя верстка будет работать на любом устройстве.',
        },
        {
            svg: <LampIcon />,
            header: 'Интуитивность',
            text: 'Отдаю предпочтение интуитивно понятному UI/UX.',
        },
        {
            svg: <RocketIcon />,
            header: 'Динамика',
            text: 'Все свои приложения и сайты я стараюсь оживить и сделать менее статичными.',
        },
    ];

    return (
        <section className={styles.about}>
            {/* <Navbar /> */}
            <div className={styles.header}>ABOUT</div>
            <div className={styles.content}>
                <img className={styles.photo} src={photo} alt='' />
                <div className={styles.text}>
                    <p>
                        Я Front-End разработчик, проживаю в городе Новосибирске.
                        Мне нравится делать вещи красивыми, создавать плавные,
                        анимированные и адаптивные веб-приложения.
                    </p>
                    <p>
                        Люблю цифровую технику, в частности компьютеры и
                        ноутбуки. Помимо работы увлекаюсь музыкой, играю на
                        электрогитаре.
                    </p>
                    <p>Связаться со мной можно по форме ниже.</p>
                </div>
            </div>
            <ul className={styles.bullets}>
                {bullets.map(bullet => (
                    <Bullet
                        children={bullet.svg}
                        header={bullet.header}
                        text={bullet.text}
                        key={bullet.header}
                    />
                ))}
            </ul>
        </section>
    );
};

export default About;
