import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Players} from '../imports/api/players';


const renderPlayers = (playersList) =>{
    return playersList.map(player =>{
        return(
            <div className="player-card" key={player._id} data-id={player._id}>
                <div className="player-details">
                    <p>{player.name} has {player.score} point(s).</p>
                </div>
                <div className="player-buttons">
                    <button className="button round" onClick={incrementScore}>+</button>
                    <button className="button round" onClick={decrementScore}>-</button>
                    <button className="button round" onClick={deletePlayer}>x</button>
                </div>
            </div>
        );
    });
}

const incrementScore = (e) =>{
    let id = e.target.parentNode.parentNode.dataset.id;
    Players.update(id, { $inc: { 'score' : 1 } });
}

const decrementScore = (e) =>{
    let id = e.target.parentNode.parentNode.dataset.id;
    Players.update(id, { $inc: { 'score' : -1 } });

}

const deletePlayer = (e) =>{
    let id = e.target.parentNode.parentNode.dataset.id;
    Players.remove({_id: id});

}

const addPlayer = (e) =>{
    e.preventDefault();
    const playerName = e.target.playerName.value;
    const playerScore = parseInt(e.target.playerScore.value);
     Players.insert({
        name: playerName,
        score: playerScore
    });

}

Meteor.startup(() =>{
    const title = 'Score Card';
    const name = 'Yasin Yaqoobi';
    Tracker.autorun(() => {
        let jsx = (
            <div>
                <h1>{ title }</h1>
                <p>Hello { name }</p>
                <p>This is my second p.</p>
                { renderPlayers(Players.find().fetch()) }
                <form onSubmit={addPlayer}>
                    <input type="text" name="playerName"></input>
                    <input type="number" name="playerScore"></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});

