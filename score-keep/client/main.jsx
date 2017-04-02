import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Players} from '../imports/api/players';
import Player from '../imports/ui/Player';
import App from '../imports/ui/App';


Meteor.startup(() =>{
    Tracker.autorun(() => {
        const title = 'Score Card';
        const players = Players.find({}, {
                sort: {score: -1}
            }).fetch();
        ReactDOM.render(<App title={title} players={players} />, document.getElementById('app'));
    });
});

