import { Meteor } from 'meteor/meteor';

import { ShortLinks } from '/imports/api/shortlinks';


// Meteor.startup(() => {

// });
//
if (Meteor.isServer) {
    Meteor.publish('links', function () {
    return ShortLinks.find({ owner: this.userId });
  });
}
