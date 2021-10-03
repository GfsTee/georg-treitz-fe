import styles from '../styles/VitaDetails.module.css'
import VitaText from './VitaText';

const VitaDetails = ({ title, years, data, sorting, subtitle }) => {
    return (
        <>
            <h1 className={styles.vitaHeadline}>{title} {subtitle ? <span>(Auswahl)</span> : ""}</h1>
            {/* new Text Component for grid-styling */}
            {years && years.map((year, i) => <VitaText
                key={i}
                year={year}
                data={sortArray(data, sorting).filter(single => single.year === year)}
            />)}
        </>
    );
}

export default VitaDetails;


// direction: true => starting with low going to high
// direction: false => starting with hight going to low
const sortArray = (array, direction) => direction ?
    array.sort((a, b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : 0))
    :
    array.sort((a, b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : 0)).reverse()

