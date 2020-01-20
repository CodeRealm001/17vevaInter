import React from'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import routes from '../routes/routes';
import '../style/sidebar.css'







const Sidebar =({sideBarMetricProps,sideBarCallProps})=>{
  return(

    <section className="section-wrapper">
        <Router>
              <section className="sidebar-container">
                <nav>
                  <ul className="main-menu">
                  
                    <li className="menu-header">
                      <h3>Welcome</h3>
                    </li>
                    <li >
                      <Link to="/" id='link-name'>
                        <span>Andy Reppinton</span>
                      </Link>
                    </li>

                    <li className="menu-header">
                      <h3>Metric</h3>
                    </li>
                    <li>
                      <Link to="/overview" id='link-nav'>
                        <span>Overview</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/detailing" id='link-nav'>
                        <span>Detailing</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/calls" id='link-nav'>
                        <span>Calls</span>
                      </Link>
                    </li>
                  
                  
                    <li className="menu-header">
                      <h3>Information</h3>
                    </li>

                    <li>
                      <Link to="/about-profiles" id='link-nav'>
                        <span>About profiles</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/detailing-target" id='link-nav'>
                        <span>Detailing targets</span>
                      </Link>
                    </li>

                    <li>
                      <span>v1.1.7</span>
                    </li>
                  </ul>
                </nav>
            </section>
                
            <section  className="page-content">
              <Switch>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main 
                                  mainMetricProps={sideBarMetricProps}
                                  mainCallProps={sideBarCallProps}
                                  
                              />}
                  />
                ))}
              </Switch>
            </section>
        </Router>
    </section>
  )
}





export default Sidebar;