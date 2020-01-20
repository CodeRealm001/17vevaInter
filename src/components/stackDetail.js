import React from  'react'
import StackedBarChart from './charts/stackedbar'


const StackedDetials =({stackProps})=>{
  
  
  let adherenceList = stackProps.map((value)=>(
    value.adherence
  ))

  let combinationList = stackProps.map((value)=>(
    value.combination
  ))

  let guildelinesList = stackProps.map((value)=>(
    value.guildelines
  ))

   
  let safetyList = stackProps.map((value)=>(
    value.safety
  ))

  let otherList = stackProps.map((value)=>(
    value.other
  ))

  let dosingList = stackProps.map((value)=>(
    value.dosing
  ))


  let stackedArrayList =[]
  
  
  stackProps.map((value)=>(
    stackedArrayList.push(
      {series:[{name:'Adherence',data:[value.adherence]},
               {name:'Combination',data:[value.combination]},                       
               {name:'Guildelines',data:[value.guildelines]},
               {name:'Safety',data:[value.safety]},
               {name:'Dosing',data:[value.dosing]},
               {name:'Others',data:[value.other]}]})
  ))


  
    
  //  console.log(stackedArrayList)



  return(
      <section>

        <StackedBarChart 
          adherenceProps={adherenceList}
          dosingProps ={dosingList}
          combinationProps={combinationList}
          guildelinesProps={guildelinesList}
          safetyProps={safetyList}
          otherProps={otherList} 
          stackedListProps={stackedArrayList}  
        />
        
      </section>
  )}
  export default StackedDetials;