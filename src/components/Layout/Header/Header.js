import React from 'react'
import './Header.css'
import logo from '../../../Assets/Images/the-guardian-logo-white.png'
import { Link} from 'react-router-dom'

function Header({setTypeText}) {

  const handleTextChange =(e)=>{
    setTypeText(e.target.value);
  };


return (
<div className='blueBackground'>
  <div className='topHeader'>
    <Link to='/'><img src={logo} alt='logoPic' className='logoImage'/></Link>
    <div className='search'>
          <div className='inputContainer'>
            <Link to='/searchResult'>
            <input type="text" className="searchBox" placeholder="Search all news" onChange={handleTextChange}/>
            </Link>
          </div>
      
    </div>
  </div>
</div>
  )
}
export default Header;