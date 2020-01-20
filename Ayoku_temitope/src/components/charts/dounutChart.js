import React from "react";

import Chart from 'chart.js'



class DoughnutChart extends React.Component{

  constructor(props){
    super(props)

    this.canvasRef = React.createRef();
    
  }


  componentDidUpdate() {
    this.myChart.data.datasets[0].data = this.props.data.map(d => d);
    this.myChart.update();
  }


  componentDidMount() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: 'doughnut',
      options: {
	      maintainAspectRatio: false
      },
      data: {
        
        datasets: [{
          data: this.props.data.map(d => d),
          backgroundColor: this.props.colors
        }]
      }
    });

  }

  render(){

   
    return (
      <canvas ref={this.canvasRef}/>    
    ) 
    
  }
}


export default DoughnutChart;