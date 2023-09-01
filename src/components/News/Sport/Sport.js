import React, { useEffect, useState } from "react";
import "./Sport.css";
import getSports from "../../../apis/service/getSports";
import MediumCard from "../../Card/MediumCard/MediumCard";
import Pending from "../../Feature/Pending/Pending";
import { Link } from "react-router-dom";

function Sport({ setOrder,order }) {
    //api fetch for section=sport
    const [sportDatas,setSportDatas] = useState([]);
    const [page,setPage]=useState(1)
    const [pageSize,setPageSize]=useState(3)
    
    useEffect(() => {
        getSports(page,pageSize,order)
            .then((data) => {
                setSportDatas(data.response.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page,pageSize,order]);

if (sportDatas.length === 0) {
    return <Pending/>
;
}

return (
<div className="sport">
    <div className="sportsTitle">Sports</div>
    <div className="sportNews">
        {sportDatas.map((sportData,index)=>{
            return (
                <div className="mediumCardContainerSport" key={index}>
                    <Link  to="/article" state={{data:sportDatas[index]}}>
                        <MediumCard 
                        titleMed={sportData.webTitle}
                        image={sportData.fields.thumbnail}
                        className='mediumCardListSport'
                        />
                    </Link>
                </div>
                )
            })}
    </div>
</div>
);
}

export default Sport;
