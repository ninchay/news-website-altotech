import React,{useEffect, useState,useRef} from 'react'
import './SearchResult.css'
import getSearch from '../../../apis/service/getSearch';
import MediumCard from '../../Card/MediumCard/MediumCard'
import { Link } from 'react-router-dom';
import DdItem from '../../Feature/Dropdown/DdItem';

function SearchResult({typeText}) {
  const [searchDatas, setSearchDatas] = useState([]);
  const [pageSearch,setPageSearch]=useState(1);
  const [orderSearch, setOrderSearch] = useState('newest');
  const [currentSearch, setCurrentSearch]=useState(typeText);
  const loading=useRef(false)

  const handleSelectOrder = (selectedOrder) => {
    setOrderSearch(selectedOrder);
  };
  useEffect(() => {
    if (typeText.length > 0) {
    const timeOutId = setTimeout(() => 
    {if(typeText===currentSearch){
      setCurrentSearch(typeText);
      getSearchData(typeText,pageSearch,orderSearch);
    }
    else {
      setSearchDatas([]);
      setPageSearch(1);
      getSearchData(typeText,1,orderSearch) //delete old data
      setCurrentSearch("")
    }
    } 
    , 500);
    return () => clearTimeout(timeOutId);
    }
  }, [typeText, orderSearch]);

  function getSearchData(searchText,page,orderSearch){
    if(!loading.current){
      loading.current=true
      getSearch(searchText,page,orderSearch)
      .then(data => {
        setSearchDatas(prevData=>[...prevData,...data.response.results]);
        setPageSearch(page+1)
      })
      .catch(error => {
        console.error(error);
      }).finally(()=>{loading.current=false});
    }
  }

  useEffect(() => {
    const handleScroll = () => {
        const offsetHeight = document.documentElement.offsetHeight;
        const innerHeight = window.innerHeight;
        const scrollTop = document.documentElement.scrollTop;

        const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 5;
        if(hasReachedBottom)  {
          getSearchData(typeText,pageSearch,orderSearch)
        }
      };

    window.addEventListener("scroll", handleScroll);


    return () => window.removeEventListener("scroll", handleScroll);
    }, [typeText,pageSearch,orderSearch]);

  return (
  <div>
    <div className='topMostSearch'>
      <h1 className='header'>Search results</h1>
      <DdItem  onSelectOrder={handleSelectOrder}/>
    </div>
    <div className='bigSearch'>
      {searchDatas.map((searchData,index)=>{
        return(
          <div key={index} className='searchResultNews'>
            <Link to="/article" state={{data:searchData}}>
            <MediumCard
            titleMed={searchData.webTitle}
            image={searchData?.fields?.thumbnail}
            />
            </Link>
          </div>
        )
      })}
    </div>
  </div>

  )
}

export default SearchResult