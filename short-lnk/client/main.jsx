import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


// our components
import Signup from '../imports/ui/Signup';
import Signin from '../imports/ui/Signin';
import Homepage from '../imports/ui/Homepage';

export const renderRoutes = () => (
  	<Router>
  		<div className="container">
            <Route exact path='/' component={Homepage}/>
	        <Route path="/signup" component={Signup}/>
            <Route path="/signin" component={Signin}/>
	    </div>
    </Router>
);


Meteor.startup(() =>{
    Tracker.autorun(() => {
        ReactDOM.render(renderRoutes(), document.getElementById('app'));
    });
});

