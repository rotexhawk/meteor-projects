import React from 'react';
import {Players} from '../api/players';

export default class AddPlayer extends React.Component{
    render(){
        return(
        <form onSubmit={this.addPlayer.bind(this)}>
            <input type="text" name="playerName"></input>
            <input type="number" name="playerScore"></input>
            <input type="submit" value="submit"></input>
        </form>);
    }

    addPlayer(e){
        e.preventDefault();
        const playerName = e.target.playerName.value;
        const playerScore = parseInt(e.target.playerScore.value);
         Players.insert({
            name: playerName,
            score: playerScore
        });
    }

}