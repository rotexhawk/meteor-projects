import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = { err: '' };
    }

    render(){
        return(
        <div className="row">
            <div className="col s12 m6 offset-m3">
            { this.state.err ? <div className="card-panel red lighten-2">{this.state.err}</div> : undefined }
            <form onSubmit={this.signup.bind(this)}>
                <h2>Signup Form</h2>
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
            <a href="/signin">Already have an account?</a>
            </div>
        </div>
        );

    }

    signup(e){
        e.preventDefault();

        let user = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Accounts.createUser({ email: user, password: password}, (err) =>{
            this.setState({err: err.reason});
            console.log('error', err);
        })
    }

}