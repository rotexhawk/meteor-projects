import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// our components
import Signup from '../imports/ui/Signup'; 
import Signin from '../imports/ui/Signin'; 

export const renderRoutes = () => (
  	<BrowserRouter>
  		<div>
	        <Route path="/" component={Signup}/>
	    </div>
    </BrowserRouter>
);


Meteor.startup(() =>{
    Tracker.autorun(() => {
        ReactDOM.render(renderRoutes(), document.getElementById('app'));
    });
});

