import React from 'react';
import Overview from '../components/overviewPage';
import Detail from '../components/detailPage'
import Calls from '../components/callPage'
import Detailtag from '../components/detailTargetPage'
import About from '../components/aboutPage'






const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Home</h2>
  },
  {
    path: "/overview",
    main: ({mainMetricProps,mainCallProps}) => <Overview  overMetricProps={mainMetricProps} overCallProps={mainCallProps}/>
  },
  {
    path: "/detailing",
    main: () => <Detail/>
  },
  {
    path: "/calls",
    main: () => <Calls/>
  },
  {
    path: "/about-profiles",
    main: () => <About/>
  },
  {
    path: "/detailing-target",
    main: () => <Detailtag/>
  },

];



export default routes;


