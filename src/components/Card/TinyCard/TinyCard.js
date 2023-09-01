import React from 'react'
import './TinyCard.css'
function TinyCard({titleTiny}) {
  return (
<div className='backgroundTiny'>
  <div className='titleTiny'>{titleTiny}</div>
</div>
  )
}

export default TinyCard