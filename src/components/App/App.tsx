import styles from './App.module.scss';
import { Navbar } from '..';
import { About, Greetings } from '../../pages';

const App = () => {
    return (
        <div className={styles.app}>
            <Greetings />
            <About />
        </div>
    );
};

export default App;
