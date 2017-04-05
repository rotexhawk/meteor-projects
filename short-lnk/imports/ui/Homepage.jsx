import React from 'react';

export default class Homepage extends React.Component{
    constructor(props){
        super(props);
       // this.state.user = Meteor.user.email;
    }
    render(){
        return(
            <div>
                <nav>
                    <div Name="nav-wrapper">
                        <div className="col s12">
                          <a href="#!" className="brand-logo">Logo</a>
                          <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                          </ul>
                        </div>
                    </div>
                </nav>
                <h1>Hello</h1>
                <form onSubmit={this.createLink.bind(this)}>
                    <h2>Create your shortlnk app</h2>
                    <div className="form-group">
                        <label htmlFor="text">URL:</label>
                        <input type="text" ref="url" className="form-control" />
                    </div>
                    <input type="submit" value="submit" className="btn btn-primary"></input>
                </form>
            </div>
        );
    }

    createLink(e){
        e.preventDefault();
        console.log('this is working');
    }

}