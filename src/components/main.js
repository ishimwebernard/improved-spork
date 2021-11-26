import React from 'react'
import Home from './home'
import HomeRefurbished from './homerefurbished'
import Pricing from './pricing'
import MemberShip from './membership'
import AboutUs from './aboutus'
import Contact from './contact'
import Login from './login'
import { Switch, Route} from 'react-router-dom'
import Applc from './applc'
import Education from './education'
import Availability from './availability'
import Swot from './swot'
import References from './references'
import Documents from './documents'
import Admindashboard from './admindashboard'
import Applications from './applications'
import ReviewApplication from './reviewappl'
export default function Main() {
    return (
        <div className="">
         <Switch>
         <Route path="/" exact component={HomeRefurbished}/>
         <Route path="/pricing" exact component={Pricing}/>
         <Route path="/membership"exact component={Applc} />
         <Route path="/about" exact component={AboutUs} />
         <Route path="/contact" exact component={Contact} />
        <Route path="/signin" exact component={Login} />
        <Route path="/education" exact component={Education} />
        <Route path="/availability" exact component={Availability} />
        <Route path="/streandwe" exact component={Swot} />
        <Route path="/references" exact component={References} />
        <Route path="/documents" exact component={Documents} />
        <Route path="/admindashboard" exact component={Admindashboard} />
        <Route path="/admindashboard/applications" exact component={Applications} />
        <Route path="/admindashboard/appreview" exact component={ReviewApplication} />
         </Switch>
            
        </div>
    )
}
