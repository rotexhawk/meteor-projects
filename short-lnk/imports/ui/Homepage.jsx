import React from 'react';
import { Meteor } from 'meteor/meteor';
import Links from '/imports/ui/Links';
import { ShortLinks } from '/imports/api/shortlinks';

export default class Homepage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="row">
                <div className="col l12">
                    <nav>
                        <div className="nav-wrapper">
                            <div className="col s12">
                              <a href="#!" className="brand-logo">Logo</a>
                              <ul className="right hide-on-med-and-down">
                                <li><a href="#"  onClick={this.logout.bind(this)}>Logout</a></li>
                              </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col s12 m8 offset-m2">
                    <h3>Create your shortlnk app</h3>
                    <form onSubmit={this.createLink.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="text">URL:</label>
                            <input type="text" ref="url" className="form-control" />
                        </div>
                        <input type="submit" value="submit" className="btn btn-primary"></input>
                    </form>
                </div>
                <Links links={this.props.links}/>
            </div>
        );
    }

    createLink(e){
        e.preventDefault();
        let link = this.refs.url.value.trim();
        if (link.indexOf('http://') === -1){
            link = 'http://' + link;
        }
        const shortlink =   'http://' + Math.random().toString(36).replace(/[^a-z]+/g, '') + '.com';
        ShortLinks.insert({
            link: link,
            shortlink: shortlink,
            active: 1,
            owner: Meteor.userId()
        });
        console.log('this is working', link);
    }

    // addPlayer(e){
    //     e.preventDefault();
    //     const playerName = e.target.playerName.value;
    //     const playerScore = parseInt(e.target.playerScore.value);
    //      Players.insert({
    //         name: playerName,
    //         score: playerScore
    //     });
    // }

    logout(e){
        e.preventDefault();
        Meteor.logout(cb =>{
            console.log(cb);
            console.log('user logged out');
        })
    }

}