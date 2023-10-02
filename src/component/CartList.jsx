import React, { useEffect, useState } from 'react'

const CartList = ({cart}) => {

  let [CART , setCART] = useState([]);

  useEffect(()=>{
    setCART(cart);
  },[cart]);

  return (
    <div>
    <h2>CartList</h2>
        <div>
            {
              CART.map((cartItem,i)=>{
                    return(
                        <div className='cartitem' key={i}>
                        <img style={{width:"5%"}} src={cartItem.url} alt="photo" /> 
                        <span>{cartItem.name} </span>
                        <button onClick={()=>{
                          let _updatedCart = CART.map((item,index)=>{
                            return i==index ? {...item,quantity : item.quantity>0 ? item.quantity - 1 : item.quantity=0} : item  
                          })
                          setCART(_updatedCart);
                        }}>-</button>                        
                        <span> {cartItem.quantity} </span>
                        <button onClick={()=>{
                          let _updatedCart = CART.map((item,index)=>{
                            return i==index ? {...item,quantity : item.quantity + 1} : item  
                          })
                          setCART(_updatedCart);
                        }}>+</button>
                        <span>  Rs{cartItem.price * cartItem.quantity}</span>
                      </div>
                    )
                })
            }
        </div>

        <p> Total : <span></span>
          {
            CART.map(item => item.price * item.quantity).reduce((total,value) => total+value , 0)
          }
        </p>
    </div>
  )
}

export default CartList