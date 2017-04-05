import React from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component{
    render(){
        return(
        <div>
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
        <a href="/">Already have an account?</a>
        </div>
        );
        
    }

    signup(e){
        e.preventDefault(); 
        console.log('gets to this point'); 

        let user = this.refs.email.value.trim(); 
        let password = this.refs.password.value.trim(); 

        Accounts.createUser({ email: user, password: password}, (err) =>{
            console.log('error', err); 
        })
    }

}