import React from 'react'

const Header = ({count , setShowCart}) => {
  return (
    <div className='header'> 
        <div className='click' onClick={()=> setShowCart(false)}>Shoping Cart</div>
        <div className='click' onClick={()=> setShowCart(true)}>Cart <sup>{count}</sup></div>
    </div>
  )
}

export default Header