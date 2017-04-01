import React from 'react';
import {Players} from '../api/players';

export default class Player extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="player-card">
                <div className="player-details">
                    <p>{this.props.player.name} has {this.props.player.score} point(s).</p>
                </div>
                <div className="player-buttons">
                    <button className="button round" onClick={this.incrementScore.bind(this)}>+</button>
                    <button className="button round" onClick={this.decrementScore.bind(this)}>-</button>
                    <button className="button round" onClick={this.deletePlayer.bind(this)}>x</button>
                </div>
            </div>
        );
    }

    incrementScore(){
        Players.update(this.props.player._id, { $inc: { 'score' : 1 } });
    }

    decrementScore(){
         Players.update(this.props.player._id, { $inc: { 'score' : -1 } });
    }

    deletePlayer(){
        Players.remove({_id: this.props.player._id});
    }



}