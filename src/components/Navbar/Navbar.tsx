import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div>Logo</div>
            <div>About me</div>
            <div>Skills</div>
            <div>ru / eng</div>
        </nav>
    );
};

export default Navbar;
