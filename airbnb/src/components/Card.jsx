import React from 'react'
import '/src/index.css'
function Card(props)
{
  return(<div className="out"><img src={props.dm.coverImg} className="mains"/>{props.dm.openSpots===0 ? <div className='badge'>SOLD OUT</div>:(props.dm.location==="Online" &&<div className='badge'>ONLINE</div>)}<div className='in'><img src="/images/Star 1.png" className="star" />  <span>{ props.dm.stats.rating}</span>
  <span className="gray"> ({props.dm.stats.reviewCount}) • </span>
  <span className="gray">{props.dm.location}</span></div>
  <p className='tit'>{props.dm.title}</p>
  <p className='desc'>"{props.dm.description}"</p>
  <p className='price'><span className="bold">From ${props.dm.price}</span> / person</p></div>)
}
export default Card