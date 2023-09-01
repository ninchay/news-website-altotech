import React from 'react'
import './Article.css'
import parse from 'html-react-parser'

function Article(props) {
    const data=props.data

return (
<div className='article'>
        <div className='publicationDate'>
            {data.webPublicationDate}
        </div>

        <div className='webTitle'>
            {data.webTitle}
        </div>

        <div className='headline'>
            {data.fields.headline}
        </div>
    <div className='picNText'>
        <div className='bodyText'>
            {parse(data.fields.body)}
        </div>
        <div className='thumbnail'>
            {data.fields.thumbnail !== "" && (
            <img src={data.fields.thumbnail} alt="pic" />
            )}
        </div>
    </div>
</div>
  )
}

export default Article