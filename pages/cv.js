import { useEffect, useState } from "react";
import VitaDetails from "../components/VitaDetails";
import styles from '../styles/Vita.module.css'
const Vita = ({ biblios, cvs, groups, prices, singles }) => {
    const [years, setYears] = useState(null)
    useEffect(() => {
        setYears(
            {
                biblios: [...new Set(biblios.map(detail => detail.year))],
                cvs: [...new Set(cvs.map(detail => detail.year))],
                groups: [...new Set(groups.map(detail => detail.year))],
                prices: [...new Set(prices.map(detail => detail.year))],
                singles: [...new Set(singles.map(detail => detail.year))],
            }
        )
        // console.log(sortArray(biblios, true))
    }, [])
    return (
        <section className={styles.vitaGrid}>
            {years && <>
                <VitaDetails
                    title="Vita"
                    years={years.cvs}
                    data={cvs}
                    sorting
                />
                <VitaDetails
                    title="Gruppenausstellungen"
                    subtitle
                    years={years.groups}
                    data={groups}
                    sorting
                />
                <VitaDetails
                    title="Einzelausstellungen"
                    subtitle
                    years={years.singles}
                    data={singles}
                    sorting
                />
                <VitaDetails
                    title="Bibiographie"
                    years={years.biblios}
                    data={biblios}
                    sorting
                />
                <VitaDetails
                    title="Preise &amp; Nominees "
                    years={years.prices}
                    data={prices}
                    sorting
                />
            </>
            }
            {/* <h1>Vita</h1>
            {years && years.cvs.map(detail => <div>
                <h2>{detail}</h2>
                <div>
                    {sortArray(cvs, false).filter(cvsSingle => cvsSingle.year === detail).map(ele => <div>{ele.text}</div>)}
                </div>
            </div>)}

            <h1>Gruppen</h1>
            {years && years.groups.map(detail => <div>
                <h2>{detail}</h2>
                <div>
                    {sortArray(groups, true).filter(groupsSingle => groupsSingle.year === detail).map(ele => <div>{ele.text}</div>)}
                </div>
            </div>)} */}

        </section>
    );
}

export default Vita;

export async function getStaticProps() {
    const bibliosRaw = await fetch(`${process.env.BASE_URL}/biblios`);
    const biblios = await bibliosRaw.json();
    const cvsRaw = await fetch(`${process.env.BASE_URL}/cvs`);
    const cvs = await cvsRaw.json();
    const groupsRaw = await fetch(`${process.env.BASE_URL}/groups`);
    const groups = await groupsRaw.json();
    const pricesRaw = await fetch(`${process.env.BASE_URL}/prices`);
    const prices = await pricesRaw.json();
    const singlesRaw = await fetch(`${process.env.BASE_URL}/singles`);
    const singles = await singlesRaw.json();
    return {
        props: { biblios, cvs, groups, prices, singles },
    };
}
