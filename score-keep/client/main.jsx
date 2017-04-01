import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Players} from '../imports/api/players';
import Player from '../imports/ui/Player';
import PlayerList from '../imports/ui/PlayerList';
import AddPlayer from '../imports/ui/AddPlayer';
import Header from '../imports/ui/Header';

Meteor.startup(() =>{
    const title = 'Score Card';
    const name = 'Yasin Yaqoobi';
    Tracker.autorun(() => {
        let jsx = (
            <div>
                <Header title="Score Keep" />
                <PlayerList players={Players.find().fetch()} />
                <AddPlayer />
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});

