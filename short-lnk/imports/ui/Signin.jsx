import { Meteor } from 'meteor/meteor';
import React from 'react';

export default class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state = { err: '' };
    }
    render(){
        return(
        <div>
            { this.state.err !== '' ?
                (<div className="card-panel red lighten-2">{this.state.err}</div>) : ('')
            }
            <form onSubmit={this.signin.bind(this)}>
                <h2>Signin Form</h2>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" ref="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" ref="password" className="form-control" />
                </div>
                <input type="submit" value="submit" className="btn btn-primary"></input>
            </form>
        </div>
        );
    }

    signin(e){
        e.preventDefault();
        let user = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        Meteor.loginWithPassword(user, password, (err) =>{
            console.log('Callback', err);
            this.setState({err: err.reason});
        });
    }

}