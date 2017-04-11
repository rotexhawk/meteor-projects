import React from 'react';
import { Meteor } from 'meteor/meteor';
import { ShortLinks } from '/imports/api/shortlinks';
import { Tracker } from 'meteor/tracker';

export default class Links extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            links: []
        }
    }

    componentDidMount() {
        this.linksTracker = Tracker.autorun(() => {
            Meteor.subscribe('links')
            const links = ShortLinks.find().fetch()
            this.setState({ links })
        })
    }


    componentWillUnmount() {
        console.log('componentWillUnmount LinksList');
        this.linksTracker.stop();
    }

    renderLinks(){
        return this.state.links.map(link =>{
            return(
                <div key={link._id} className="col s12 m8 offset-m2 link-cards">
                    <div className="card white darken-1">
                        <div className="card-content">
                        <span className="card-title">Short Link <a href="#" onClick={this.deleteCard.bind(this)}><i data-id={link._id} className="material-icons right">close</i></a></span>
                            original Link: {link.link}
                        </div>
                        <div className="card-action">
                            <a href={link.link}>{link.shortlink}</a>
                        </div>
                    </div>
                </div>
            )
        });
    }

    render(){
        return (<div>{this.renderLinks()}</div>)
    }

    deleteCard(e){
        e.preventDefault();
        let linkId = e.target.dataset.id.trim();
        Meteor.call('links.delete', linkId);

    }

}