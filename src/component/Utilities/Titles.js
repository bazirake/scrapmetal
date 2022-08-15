export const setTile=(newTile)=>{
return(
   document.title=newTile 
  )
 }
 
 const titles = [
    {id: 1, title: 'Home'},
    {id: 2, title: 'About'},
    {id: 3, title: 'Contact'},
    {id: 4, title: 'SignIn'},
    {id: 5, title: 'Register'},
    {id: 6, title: 'Orders'},
  ];

  export const getTitle=()=>{
      return (titles)
  }


