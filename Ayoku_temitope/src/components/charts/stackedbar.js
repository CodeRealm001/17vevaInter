import React from 'react';
import Chart from 'react-apexcharts'
import '../../style/stack.css'


//import Charts from 'chart.js'


class StackedBarChart extends React.Component{
   
  
  constructor(props){
    super(props)
    this.state={

        series:[],
        avgAllSeries:[{}],
        cautionSeries:[],
        complecentSeries:[],
        confidentSeries:[],
        options: {
          chart: {
            type: 'bar',
            height: 100,
            stacked: true,
            stackType: '100%',       
          },
          dataLabels: {
            enabled: false
          },
          
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                enabledOnSeries: [1],            
              },
              
            },

            },
          stroke: {
            width: 1,
            colors: ['#fff']
          },
          xaxis: {
            
            labels: {
              show: false
            },
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          
          colors:['#1a8ddd',"#35ddb3","#dddc61","#dd8844",'#8f71dd','dddddd'],
          legend:{show: false},
          labels:[""],
        },
       
  }
  }


 

  
  componentDidMount(){

    
    
   
   
  this.state.avgAllSeries[0]=this.props.stackedListProps[0].series

  //console.log(ls)

    window.setInterval(() => {

     
      let avgArray=[],
          cautionArray=[],
          compleceArray=[],
          confidentArray=[]
      this.setState(()=>(
        
        this.props.stackedListProps[0].series.map(d=>(
          avgArray.push({name: d.name , data:d.data})
        )),

        this.props.stackedListProps[1].series.map(d=>(
          cautionArray.push({name: d.name , data:d.data})
        )),
        

        this.props.stackedListProps[2].series.map(d=>(
          compleceArray.push({name: d.name , data:d.data})
        )),

        this.props.stackedListProps[2].series.map(d=>(
          confidentArray.push({name: d.name , data:d.data})
        )),

        



        {

        avgAllSeries:avgArray,
        cautionSeries:cautionArray,
        complecentSeries:compleceArray,
        confidentSeries:confidentArray
        
    })
    )}, 1000)
  
  
   
  }  



  

  render(){



    const desList =[{name:"Average All", state:this.state.avgAllSeries},
                    {name:"Caution", state:this.state.cautionSeries}, 
                    {name:"Complacent", state:this.state.complecentSeries},
                    {name:"Confident", state:this.state.confidentSeries} ,     ]

    return(

      <div>
         {desList.map((item,index)=>(
          <span key={index}>
          <h4>{item.name}</h4>
          
            <Chart  className='chart-section'
                    options={this.state.options}
                    height={100}
                    series={item.state}
                    type="bar"
                    
            />
          </span>
              

          ))}



    

    </div>

    )
  }
}



export default StackedBarChart