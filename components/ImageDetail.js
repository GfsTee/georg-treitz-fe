// import Image from "next/image";
// import Link from "next/link";
// export default function Gallery({ thumbnailUrl, title, id }) {
//     return (
//         <div>
//             <Link as={`/preview/${id}`} href="/preview/[id]">
//                 <a>
//                     <Image width={250} height={200} src={thumbnailUrl} />
//                     <div className="photoid"> {title}</div>
//                 </a>
//             </Link>
//         </div>
//     );
// }
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/ImageDetail.module.css'
const ImageDetail = ({ data }) => {
    console.log(data)

    return (
        <figure className={styles.figure}>
            <Image
                height={data.img[0].formats.large.height}
                width={data.img[0].formats.large.width}
                layout="responsive"
                src={data.img[0].formats.medium.url}
            />
        </figure>
    );
}

export default ImageDetail;