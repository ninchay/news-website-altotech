import React, {useState, useEffect} from 'react'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer';
import TopStories from '../components/News/TopStories/TopStories';
import Sport from '../components/News/Sport/Sport';
import '../styles/HomePage.css'

function HomePage() {
  const [order, setOrder] = useState('newest');

return (
<div>
      <Header /> 
    <div className='contextHomepage'>
      <TopStories setOrder={setOrder} order={order}/>
      <Sport setOrder={setOrder} order={order}/>
    </div>
      <Footer />
</div>
  )
}

export default HomePage