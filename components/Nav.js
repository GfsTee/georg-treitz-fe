import Link from 'next/link'
import { useEffect, useState } from 'react';
import styles from '../styles/Nav.module.css';

const Nav = () => {
    // Wie bekomme ich die Jahre hier hin?
    const years = [2021, 2020, 2019, 2018, 2017]
    return (
        <nav className={styles.nav}>
            <h1>Georg Treitz</h1>
            <ul>
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li className={styles.paintingLi}>
                    <Link href="/painting"><a className={styles.painting}>Malerei</a></Link>
                    <ul>
                        {years.map((year, i) => <li key={i}>
                            <Link
                                href={`/painting/${year}`}
                            >
                                <a>{year}</a>
                            </Link>
                        </li>)}
                    </ul>
                </li>
                <li>
                    <Link href="/cv"><a>Vita</a></Link>
                </li>
                <li>
                    <Link href="/texts"><a>Texte</a></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;