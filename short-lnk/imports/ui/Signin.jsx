import React from 'react';

export default class Signin extends React.Component{
    render(){
        return(
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
        </form>);
    }

    signin(e){
        e.preventDefault(); 
        console.log('this is working');
    }

}