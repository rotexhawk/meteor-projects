import { Meteor } from 'meteor/meteor';
import React from 'react';

export default class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state = { err: '' };
    }
    render(){
        return(
         <div className="row">
            <div className="col s12 m6 offset-m3">
            { this.state.err ? <div className="card-panel red lighten-2">{this.state.err}</div> : undefined }
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
            <br/>
            <a href="/signup">Don't have an account?</a>
        </div>
        </div>
        );
    }

    signin(e){
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();
        Meteor.loginWithPassword({email}, password, (err) =>{
            this.setState({err: err.reason});
        });
    }

}