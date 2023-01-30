import styles from './App.module.scss';
import { Navbar } from '..';
import { About, Greetings } from '../../pages';

const App = () => {
    return (
        <div className={styles.app}>
            {/* <Navbar />
            <About />
            <About /> */}
            <Greetings />
        </div>
    );
};

export default App;
