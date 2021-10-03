import { useEffect } from "react";

const Year = ({ year, data }) => {
    console.log(data)
    // useEffect(() => {
    //     {
    //         data.map(detail => {
    //             console.log(detail.img[0].url.indexOf(detail.img[0].id))
    //         }
    //             // <img src={detail.img[0].url} alt="" />
    //         )
    //     }
    // }, [])
    return (
        <div className="year">
            <h1>{year}</h1>
            <div>
                {data.map(detail => <div>
                    <img src={detail.img[0].url} alt="" />
                </div>)}
            </div>
        </div>
    );
}

export default Year;