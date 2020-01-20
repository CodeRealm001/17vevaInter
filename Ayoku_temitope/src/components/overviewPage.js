import React from'react'
import PerformanceRow from './perfromanRow';
import StackedDetials from './stackDetail'
import RadialBar from '../components/charts/radialbar'
import '../style/over.css'

const Overview =({overMetricProps,overCallProps})=>{


  let arryList = overMetricProps.map((value)=>(
    value.adherence
))


let rad = overCallProps.map((value)=> value.value)




  return(
    <section className="view-section">
  
     <h3>Overview</h3>
        <section className="section-a">
          <section className="next-section">
            <h4>Next Call</h4>

            <table id='test'>
              <tr>
                <th>Date: </th>
                <td id='test2'><h6>Tomorrow 2:15 PM 9 October 2018</h6></td>
              </tr>
              <tr>
                <th>Account: </th>
                <td id='test2'> Dr. Cliton Ackerman</td>
              </tr>
              <tr>
                <th>Specialty: </th>
                <td id='test2'> Respiratory therapist Assistive therapy </td>
              </tr>
              <tr>
                <th>Customer type: </th>
                <td id='test2'> Confident </td>
              </tr>
              <tr>
                <th>Call objective: </th>
                <td id='test2'>  Gain HCP agreement that effective maintence therapy can increase patient retention </td>
              </tr>
              <tr>
                <th>Pro tip: </th>
                <td id='test2'>Demonstrate our company's commitment to market leadership</td>
              </tr>
             
            </table>
            
            
          </section>

          
          <section className="call-section">
            <h4>Calls this month</h4>  
            <RadialBar series={overCallProps}/>
          </section>

        </section>
      

        <section className="section-b">
          
          <h4> Detailing topic breakdown </h4>

          <StackedDetials stackProps={overMetricProps}/>

         
        </section>
        </section>
      
   

   
  

   

 
    
    
  
    
  )
}





export default Overview;