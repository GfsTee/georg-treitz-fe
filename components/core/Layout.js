import Footer from "../Footer";
import Nav from "../Nav";
import styles from '../../styles/Layout.module.css'
const Layout = ({ children }) => {
    return (
        <main className={styles.main}>
            <Nav />
            <main>
                {children}
            </main>
            <Footer />
        </main>
    );
}

export default Layout;