 // Data generation
function getRandomArray(numItems) {
  // Create random array of objects
  //let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let allNames =['Avg all','Caution','Complecent','Confident']
  let metricId=1;
  let data = [];
  for(var i = 0; i < numItems; i++) {
    data.push({
        metricId: metricId,
        name: allNames[i],
        adherence:Math.round(20 + 80 * Math.random()),
        combination:Math.round(20 + 80 * Math.random()),
        dosing:Math.round(20 + 80 * Math.random()),
        guildelines:Math.round(20 + 80 * Math.random()),
        safety:Math.round(20 + 80 * Math.random()),
        other:Math.round(20 + 80 * Math.random()),
        

      //value: Math.round(20 + 80 * Math.random())
    });

    
  }
  metricId =metricId+1;
  return data;
}
 


function getRandomCallArray(numItems) {
  // Create random array of objects (with date)
  let data = [];
  let baseTime = new Date('2018-05-01T00:00:00').getTime();
  let dayMs = 24 * 60 * 60 * 1000;
  for(var i = 0; i < numItems; i++) {
    data.push({
      time: new Date(baseTime + i * dayMs),
      value: Math.round( (Math.random()*28)),
    });
  }
  return data;
}
 
 
 const getData =()=> {
  let data = [];
 
  data.push(
      getRandomArray(4),getRandomCallArray(1) 
  );
  
  return data;
}


export default getData;