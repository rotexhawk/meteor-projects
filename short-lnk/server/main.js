import { Meteor } from 'meteor/meteor';

import { ShortLinks } from '/imports/api/shortlinks';

if (Meteor.isServer) {
    Meteor.publish('links', function () {
    console.log('this should get called');
    return ShortLinks.find({ owner: this.userId });
  });
}

Meteor.methods({
    'links.insert'(link){
        if (!this.userId){
            throw new Meteor.Error('not-authorized');
        }
        if (link.indexOf('http://') === -1){
            link = 'http://' + link;
        }
        const shortlink =   'http://' + Math.random().toString(36).replace(/[^a-z]+/g, '') + '.com';
        ShortLinks.insert({
            link: link,
            shortlink: shortlink,
            active: 1,
            owner: this.userId
        });
    },

    'links.delete'(linkId){
        ShortLinks.remove({
            _id: linkId
        });
    }
})