import React from 'react'
import Chart from "react-apexcharts";
import '../../style/stack.css'


class RadialBar extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      series:[],
      type: 'radialBar',
      options: {
        chart: {
          height: 200,
          type: 'radialBar',
        },
        fill:{
          type:"gradient",
          gradient:{
            shade:"dark",
            type:"vertical",
            gradientToColor:["#87D4F9"],
            start:[0,100]
          }
        },
        
        plotOptions: {
          radialBar: {
            startAngle:0 ,
            endAngle:360,
            
            hollow: {
              size: '70%',
              margin:0,
            },
            track:{
              background:'black'
            }
          },
        },
        labels: ["21/56"]
      },

    }
  }


 


  componentDidMount() {

  window.setInterval(() => {

    let callValue = this.props.series.map(v=>v.value)

    let totalCalls = Math.round(((callValue/28)*100))

    
   this.setState( 
    {
    
      series: [totalCalls],
      type: 'radialBar',
      

      options: {
        chart: {
          height: 200,
          type: 'radialBar',
          width: '100%'
        },
        
        
        plotOptions: {
          radialBar: {
            startAngle:0 ,
            endAngle:360,
            
            hollow: {
              size: '50%',
              margin:0,
            },
            track:{
              background:'black'
            }
          },
        },
        fill: {
          type: 'solid',
          colors: ['#b02f00']
        },
        
        labels: [`${callValue}/28 ` ]
      },
     
    });

  }, 1000)

  }




 




  render() {

    return (
      <Chart  className='radial-section' options={this.state.options} series={this.state.series} type='radialBar'  />
      );
  }
}


export default RadialBar;