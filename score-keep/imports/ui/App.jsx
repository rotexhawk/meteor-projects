import React from 'react';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';
import Header from './Header';

export default class App extends React.Component{
    render(){
        return (
            <div>
                <Header title={this.props.title} />
                <PlayerList players={this.props.players} />
                <AddPlayer />
            </div>
        );
    }
}