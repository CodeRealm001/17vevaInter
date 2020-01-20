import React from'react'



const Calldetails =()=>{

  const value1= (Math.random() * 100) % 100,
  value2= (Math.random() * (100-value1)) % value1,
  value3= (Math.random() * 200) % 200;
  return(
    <div>
      {value1} {value2} {value3}
  </div>
  )
 
}









export default Calldetails;