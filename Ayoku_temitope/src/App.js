import React from 'react';
import Sidebar from './components/sidebar';
import getData from './function/generator';




class App extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      data:getData()
      }
  
  }


  
  componentDidMount(){
    window.setInterval(() => {
      this.setState(()=>({
        data: getData()
      }))
    }, 5000)
    
  }


 
 
 

  render(){
    const {data}= this.state;

    return (
    
      <Sidebar 
        sideBarMetricProps ={data[0]}
        sideBarCallProps={data[1]}
      />        
    )
  }
}

export default App;
