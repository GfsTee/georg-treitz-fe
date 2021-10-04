import { useRouter } from 'next/router'
import { useState } from "react";
import ImageDetail from '../../components/ImageDetail';
import styles from '../../styles/PaintingID.module.css'

const PaintingSingle = ({ mydata }) => {
    const router = useRouter()
    const { id } = router.query
    const [photos, setPhotos] = useState(mydata);

    return (
        <div className={styles.images}>
            {/* Show only pics with the right year */}
            {photos.filter(photo => photo.year.toString() === id)
                .map(photo => <ImageDetail
                    key={photo.id}
                    data={photo}
                />)}
        </div>
    );
}

export default PaintingSingle;




export async function getStaticProps() {
    const results = await fetch(`${process.env.BASE_URL}/photos`);
    const mydata = await results.json();

    return {
        props: {
            mydata
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

export async function getStaticPaths() {
    const results = await fetch(`${process.env.BASE_URL}/photos`);
    const mydata = await results.json();

    // Get the paths we want to pre-render based on posts

    const paths = [...new Set(mydata.map(detail => detail.year))].map((year) => ({
        params: { id: year.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
}