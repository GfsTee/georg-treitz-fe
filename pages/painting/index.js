import { useEffect, useState } from "react";
import Year from "../../components/Year";

const Home = ({ mydata }) => {
    const [data, setData] = useState(mydata)
    const [years, setYears] = useState(null)

    useEffect(() => {
        // find all years
        setYears([...new Set(data.map(detail => detail.year))])
    }, [data])
    return (
        <div>
            {years && years.map(year => <Year
                key={year}
                data={data.filter(detail => detail.year === year)}
                year={year}
            />)}
        </div>
    );
}

export default Home;

export async function getStaticProps() {
    const results = await fetch(`${process.env.BASE_URL}/photos`);
    const mydata = await results.json();
    return {
        props: { mydata },
    };
}