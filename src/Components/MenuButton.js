import React from 'react'

const MenuButton = ({filteritem,menuitem}) => {
  return (
    <div>
         <div className='Menu-button'>
            {
                menuitem.map((elem)=>
                {
                    return (
                    <button onClick={()=>filteritem(elem)}>{elem}</button>
            
                        );

                })
            }
            

          </div>
      
    </div>
  )
}

export default MenuButton
