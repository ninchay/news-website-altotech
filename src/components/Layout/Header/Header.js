import React from 'react'
import './Header.css'
import logo from '../../../Assets/Images/the-guardian-logo-white.png'
import { Link, useNavigate} from 'react-router-dom'

function Header({setTypeText}) {
  const navigate =useNavigate();
  const handleTextChange =(e)=>{
    setTypeText(e.target.value);
    if(e.target.value){
      setTypeText(e.target.value);
      navigate(`/searchResult`)
    }
  };


return (
<div className='blueBackground'>
  <div className='topHeader'>
    <Link to='/'><img src={logo} alt='logoPic' className='logoImage'/></Link>
    <div className='search'>
          <div className='inputContainer'>
            <input type="text" className="searchBox" placeholder="Search all news" onChange={handleTextChange}/>
          </div>
      
    </div>
  </div>
</div>
  )
}
export default Header;