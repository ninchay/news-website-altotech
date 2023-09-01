import React from 'react'
import { useParams } from 'react-router'
import Header from '../components/Layout/Header/Header'
import Footer from '../components/Layout/Footer/Footer'
import Article from '../components/News/Article/Article'
import { useLocation } from 'react-router'

function ArticlePage() {
  const location = useLocation();
  const {data} = location.state;

return (
  <div>
    <Header/>
    <div style={{maxWidth:'1110px',marginLeft:'auto',marginRight:'auto'}}>
      <Article data={data}/>
    </div>
    <Footer/>
  </div>

  )
}

export default ArticlePage