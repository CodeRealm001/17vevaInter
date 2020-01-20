import React from 'react';
import DoughnutChart from './charts/dounutChart'

//import '../style/over.css'









const PerformanceRow =({rowProps})=>{
  
  let arryList = rowProps.map((value)=>(
    value.adherence
   
))




  
  return(
    <section>
       <DoughnutChart
                  data= {arryList}
                  title={["happ","sing","hone"]}
                  colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a']}
            />

    </section>

   

  
    )}


 
  

export default PerformanceRow;