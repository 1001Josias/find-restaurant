import React, { useEffect } from 'react'

function PageDefault({children, title}){

      useEffect(()=>{
         document.title = title
      })
   
   return (
      <div id={title}>{children}</div>
   )
}

export default PageDefault