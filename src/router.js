import {Switch, Route, HashRouter} from "react-router-dom"
import React from "react"
import Dashboard from "../src/components/Dashboard"






export default ( 
    <HashRouter>
        <Switch>
          <Route path="/" component={Dashboard}/>
       </Switch>
    </HashRouter>   
)