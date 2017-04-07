import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Redirect
} from 'react-router-dom'


// our components
import Signup from '../imports/ui/Signup';
import Signin from '../imports/ui/Signin';
import Homepage from '../imports/ui/Homepage';
import { ShortLinks } from '/imports/api/shortlinks';

export const renderRoutes = (links) => (

  	<Router>
  		<div className="container">
            <Route exact path='/' render={() =>(
                !Meteor.userId() ? <Redirect to="/signin"/> : <Homepage links={links}/>
            )}/>
	        <Route path="/signup" render={() =>(
                Meteor.userId() ? <Redirect to="/"/> : <Signup />
            )}/>
            <Route path="/signin" render={() =>(
                Meteor.userId() ? <Redirect to="/"/> : <Signin />
            )}/>
	    </div>
    </Router>
);

Meteor.startup(() =>{
    Tracker.autorun(() => {
        const links = ShortLinks.find().fetch();
        ReactDOM.render(renderRoutes(links), document.getElementById('app'));
    });
});

