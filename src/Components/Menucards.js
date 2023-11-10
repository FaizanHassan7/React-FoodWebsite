import React from 'react'
import { useState } from 'react'
import MenuCard from './MenuCard'
import Menu1 from'./menuapi';
import MenuButton from './MenuButton';


const unique=[...new Set(Menu1.map((elem)=>
    {
        return elem.category;
    
    })),'All'];
    
    console.log(unique);
const Menucards = () => {
    const [menu,setmenu]=useState(Menu1);
    const [menuitem,setmenuitem]=useState(unique);

   const filteritem=(cateitem)=>
   {
    if(cateitem==='All')
    {
        setmenu(Menu1);
        return;
    }
    const updateditem=Menu1.filter((elem)=>
    {
        return elem.category===cateitem;
    });
    setmenu(updateditem);
   };
  return (
    <div>
      <div className='Menu'>
          <h1 className='contact-form-head'>--------- Food Menu---------</h1>
          <h1 className='contact-form-second'>Most Popular Items</h1>
          <MenuButton  filteritem={filteritem} menuitem={menuitem}/>
          <MenuCard menu={menu}/>
          
          </div>
    </div>
  )
}

export default Menucards
