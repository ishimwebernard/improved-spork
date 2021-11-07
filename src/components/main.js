import React from 'react'
import Home from './home'
import HomeRefurbished from './homerefurbished'
import Pricing from './pricing'
import { Switch, Route} from 'react-router-dom'

export default function Main() {
    return (
        <div className="bg-gray-50">
         <Switch>
         <Route path="/" exact component={HomeRefurbished}/>
         <Route path="/pricing" exact component={Pricing}/>
         </Switch>
            
        </div>
    )
}
