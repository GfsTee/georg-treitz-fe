import styles from '../styles/VitaText.module.css'

const VitaText = ({ year, data }) => {
    return (
        <>
            <div className={styles.line}>{year}</div>
            <div className={styles.line}>
                {data.map(ele => <div key={ele.id}>{ele.text}</div>)}
            </div>
        </>
    );
}

export default VitaText;