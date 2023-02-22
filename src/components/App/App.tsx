import styles from './App.module.scss';
import { Navbar } from '..';
import { About, Greetings, Skills } from '../../pages';

const App = () => {
    return (
        <div className={styles.app}>
            <Greetings />
            <About />
            <Skills />
        </div>
    );
};

export default App;
