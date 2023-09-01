import React from 'react'
import './Pending.css'
import circle from '../../../Assets/Images/circlePending.gif'
function Pending() {
return (
<div className='pending'>
   <img src={circle} alt="pendingIconCircle"/>
</div>
)
}

export default Pending